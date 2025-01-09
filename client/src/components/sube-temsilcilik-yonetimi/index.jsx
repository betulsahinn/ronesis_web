import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import SubeTemsilcilikYonetimiArea from "./sube-temsilcilik-yonetimi-area";

const SubeTemsilcilikYonetimi = ({ pageData }) => {
    return (
        <>
            <HeaderSix />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <BreadcrumbTwo
                            title={pageData?.title || "Rönesis PRO"}
                            innertitle={pageData?.description || "Şune Temsilcilik Yönetimi Detayları"}
                        />
                        <SubeTemsilcilikYonetimiArea pageData={pageData} />
                        <TestimonialArea />
                    </main>
                    <FooterFive style_contact={true} style_team={true} bg_style={false} />
                </div>
            </div>
        </>
    );
};

export default SubeTemsilcilikYonetimi;
