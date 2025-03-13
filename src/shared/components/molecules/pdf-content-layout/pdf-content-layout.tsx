"use client";

interface PdfContentLayoutProps {
  children: React.ReactNode;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

export const PdfContentLayout = ({ children, contentRef }: PdfContentLayoutProps) => {
  return (
    <div className="w-full p-4 border-l bg-[#EBEBEB] px-8 py-14 rounded-t-xl">
      <div className="bg-[#fff] px-14 py-8 h-[944px]" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};
