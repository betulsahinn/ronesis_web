import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import BelgeYonetimiArea from "./belge-yonetimi-area";

const BelgeYonetimi = ({ pageData }) => {
    return (
        <>
            <HeaderSix />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <BreadcrumbTwo
                            title={pageData?.title || "Rönesis PRO"}
                            innertitle={pageData?.description || "Belge Yönetimi Detayları"}
                        />
                        <BelgeYonetimiArea pageData={pageData} />
                        <TestimonialArea />
                    </main>
                    <FooterFive style_contact={true} style_team={true} bg_style={false} />
                </div>
            </div>
        </>
    );
};

export default BelgeYonetimi;
