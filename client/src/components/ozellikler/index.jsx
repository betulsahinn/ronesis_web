import BreadcrumbSix from "@/src/common/breadcrumbs/breadcrumb-6";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import Banner from "./banner";
import Portfolio from "./portfolio";
import OzelliklerArea from "./ozellikler-area";

const Ozellikler = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbSix />
            <Banner />
            <OzelliklerArea />
            {/*<Portfolio />*/}
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default Ozellikler;
