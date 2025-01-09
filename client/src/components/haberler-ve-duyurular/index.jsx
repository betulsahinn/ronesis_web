import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import HaberlerVeDuyurularArea from "./haberler-ve-duyurular-area";

const HaberlerVeDuyurular = ({ pageData }) => {
    return (
        <>
            <HeaderSix />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <BreadcrumbTwo
                            title={pageData?.title || "Üye Portalı"}
                            innertitle={pageData?.description || "Haberler ve Duyurular Detayları"}
                        />
                        <HaberlerVeDuyurularArea pageData={pageData} />
                        <TestimonialArea />
                    </main>
                    <FooterFive style_contact={true} style_team={true} bg_style={false} />
                </div>
            </div>
        </>
    );
};

export default HaberlerVeDuyurular;
