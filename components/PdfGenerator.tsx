'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Function to hide elements that shouldn't be in the PDF
const prepareElementForPDF = (element: HTMLElement) => {
  // Hide elements with data-pdf-ignore attribute
  const elementsToHide = element.querySelectorAll('[data-pdf-ignore]');
  elementsToHide.forEach(el => {
    (el as HTMLElement).style.display = 'none';
  });

  // Ensure all cards are visible
  const cards = element.querySelectorAll('.card');
  cards.forEach(card => {
    (card as HTMLElement).style.display = 'block';
  });

  // Ensure all charts are visible
  const charts = element.querySelectorAll('.recharts-wrapper');
  charts.forEach(chart => {
    (chart as HTMLElement).style.visibility = 'visible';
    (chart as HTMLElement).style.opacity = '1';
  });
};

export const generatePDF = async (elementId: string, filename: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Create a clone of the element to avoid affecting the original
  const elementCopy = element.cloneNode(true) as HTMLElement;
  
  // Prepare the element for PDF generation
  prepareElementForPDF(elementCopy);
  
  // Set up the clone for rendering
  elementCopy.style.position = 'absolute';
  elementCopy.style.left = '-9999px';
  elementCopy.style.width = '100%';
  elementCopy.style.padding = '20px';
  elementCopy.style.backgroundColor = 'white';
  
  // Ensure proper background for dark mode
  if (document.documentElement.classList.contains('dark')) {
    elementCopy.classList.add('dark');
    elementCopy.style.color = '#1f2937'; // Dark text for better contrast
  }
  
  document.body.appendChild(elementCopy);

  try {
    const canvas = await html2canvas(elementCopy, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#ffffff',
      onclone: (clonedDoc, element) => {
        // Ensure all text is visible in the PDF
        const allElements = clonedDoc.querySelectorAll('*');
        allElements.forEach(el => {
          const style = window.getComputedStyle(el);
          if (style.color === 'rgba(0, 0, 0, 0)') {
            (el as HTMLElement).style.color = '#1f2937';
          }
        });
      },
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
    });

    // Calculate dimensions to maintain aspect ratio
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = 297; // A4 height in mm
    const imgWidth = pdfWidth - 20; // Add margins
    const pageHeight = pdfHeight - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Add first page with title and date
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(20);
    pdf.text('Financial Dashboard', 15, 20);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 15, 27);
    
    // Add the main content
    pdf.addImage(imgData, 'PNG', 10, 35, imgWidth, imgHeight, undefined, 'FAST');
    
    // Add page numbers
    const pageCount = pdf.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(10);
      pdf.text(
        `Page ${i} of ${pageCount}`,
        pdfWidth / 2,
        pdfHeight - 10,
        { align: 'center' }
      );
    }

    // Save the PDF
    pdf.save(`${filename}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
  } finally {
    // Clean up
    document.body.removeChild(elementCopy);
  }
};

interface PdfButtonProps {
  elementId: string;
  filename?: string;
  className?: string;
}

export const PdfButton: React.FC<PdfButtonProps> = ({
  elementId,
  filename = 'financial-dashboard-export',
  className = '',
}) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleClick = async () => {
    try {
      setIsGenerating(true);
      await generatePDF(elementId, filename);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isGenerating}
      className={`flex items-center justify-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors ${className} ${
        isGenerating ? 'opacity-70 cursor-not-allowed' : ''
      }`}
    >
      {isGenerating ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-sm font-medium">Generating...</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-sm font-medium">Export PDF</span>
        </>
      )}
    </button>
  );
};

export default PdfButton;
