"use client"


import { RefObject } from "react";

import { HeaderPreviewOrder } from "../../molecules/header-preview-order/header-preview-order";
import { FooterPreviewOrder } from "../../molecules/footer-preview-order/footer-preview-order";
import { ContentPreviewOrder } from "../../molecules/content-preview-order/content-preview-order";
import { PdfContentLayout } from "../../molecules/pdf-content-layout/pdf-content-layout";


interface PrewvierOrder {
  contentRef: RefObject<HTMLDivElement | null>
}

export const PreviewOrder = ({ contentRef }: PrewvierOrder) => {
  return (
    <PdfContentLayout contentRef={contentRef}>
      <HeaderPreviewOrder />
      <ContentPreviewOrder />
      <FooterPreviewOrder />
    </PdfContentLayout>
  );
}
