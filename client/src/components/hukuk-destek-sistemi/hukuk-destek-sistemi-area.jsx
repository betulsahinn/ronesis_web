import React from 'react';
import AnswerQuestion from '@/src/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../public/assets/img/service/meeting.jpg";

const service_details_content = {
    category_title: "Hizmet Kategorileri",
    categorys: [
        {id: 1, category: "Üye Hukuk Destek", cls: "active"},
        {id: 2, category: "Avukat İdari İşlem", cls: ""},
        {id: 3, category: "Dava Takip Sistemi", cls: ""},
        {id: 4, category: "Online Danışmanlık", cls: ""},
        {id: 5, category: "Başvuru Yönetimi", cls: ""},
        {id: 6, category: "SMS Bildirim", cls: ""},
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    overview_title: "Hukuk Destek Sistemi",
    overview_des: <>Üyelerinizin hukuki başvurularını online platform üzerinden kolayca yönetin!
        Avukat paneli ve SMS bildirim sistemi ile başvuru süreçlerini hızlandırın. Üye paneli ve
        mobil uygulama entegrasyonu sayesinde başvuruları her kanaldan kabul edin ve telefon trafiğinden
        kurtulun.</>,

    overview_list: [
        <>Entegre Başvuru Yönetimi: <br /> <span>Web sitesi, üye paneli ve mobil uygulama üzerinden
        gelen başvuruları tek platformdan yönetin. Üyeleriniz başvurularına dosya ekleyebilir ve
        süreci online takip edebilir.</span></>,
        <>Avukat Paneli: <br /> <span>Avukatlarınız için özel giriş paneli ile dava ve idari işlem
        takibini kolaylaştırın. Başvuruları yönlendirin ve süreçleri eşgüdümlü yönetin.</span></>,
        <>SMS Bildirim Sistemi: <br /> <span>Başvuru süreçlerindeki her aşamada üye, yönetici ve
        avukatları otomatik SMS'ler ile bilgilendirin. İletişimi kesintisiz sürdürün.</span></>,
        <>Anlık Mesajlaşma: <br /> <span>Üye, avukat ve yönetici arasında mesajlaşma imkanı ile
        başvuru süreçlerini hızlandırın. Yöneticiler tüm yazışmaları takip edebilir.</span></>,
        <>Şube Yetkilendirme: <br /> <span>Şubelerinize yetki tanımlayarak hukuk destek sürecini
        yaygınlaştırın. Başvuruları merkezi sistemden takip edin.</span></>,
        <>Detaylı Raporlama: <br /> <span>Başvuru istatistikleri, sonuçlandırma oranları ve süreç
        analizlerini tek ekrandan görüntüleyin. Dijital arşiv ile geçmiş başvurulara kolayca
        ulaşın.</span></>,
        ],

        challange_titel: "Dijital Dönüşüm",
        challange_des: <>Hukuk destek süreçlerinizi tamamen dijitalleştirin! <br/> Online başvuru sistemi,
            avukat paneli ve SMS bildirimleri ile süreçleri hızlandırın. Üyelerinizin taleplerini en etkili
            şekilde karşılayarak kurumsal kimliğinizi güçlendirin.<br/> Detaylı raporlama ve arşivleme özellikleri
            ile tüm süreçleri kontrol altında tutun.</>,
        }
const {
    category_title,
    categorys,
    bg_img,
    overview_title,
    overview_des,
    overview_list,
    challange_titel,
    challange_des
}  = service_details_content

const HukukDestekSistemiArea = () => {

    return (
        <>
            <div className="sv-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="sv-details-widget">
                                <div className="sv-details-category mb-30">
                                    <div className="sv-details-category-title">
                                        <h4 className="sv-details-title-sm">{category_title}</h4>
                                    </div>
                                    <div className="sv-details-category-list">
                                        <ul>
                                            {categorys.map((item, i)  =>
                                                <li key={i} className={item.cls}>
                                                    <Link href="#"><span>{item.category}</span><i className="fal fa-angle-right"></i></Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>

{/*
                                <div className="tp-service__dashboard mb-30" style={{backgroundImage: `url(${bg_img})`}}>
                                    <div className="tp-service__top-content">
                                        <h3 className="tp-service__title-white">Data Analysis <br /> Tools & Methods</h3>
                                        <p>Lorem Ipsum is simply dummy text <br /> of the printing</p>
                                        <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="#">
                                            <span>Work with Us</span>
                                            <b></b>
                                        </Link>
                                    </div>
                                    <div className="tp-service__dashdboard-sm-img">
                                        <Image src={dashbord} className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s"
                                               alt="theme-pure" />
                                    </div>
                                </div>

                                <div className="sv-details-social-box mb-30">
                                    <h4 className="sv-details-title-sm">Share it.</h4>
                                    <div className="sv-details-social-link">
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        <Link href="#"><i className="fab fa-youtube"></i></Link>
                                    </div>
                                </div>
*/}

                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8">
                            <div className="sv-details-wrapper">
                                <div className="sv-details-thumb mb-45">
                                    <Image className="w-100" src={service_img} alt="theme-pure" />
                                </div>
                                <div className="sv-details-title-box mb-55">
                                    <h4 className="sv-details-title">{overview_title}</h4>
                                    <p>{overview_des}</p>
                                </div>
                                <div className="sv-details-text mb-35">
                                    <h4 className="sv-details-text-title pb-10">Hukuki Süreçlerinizi Online Platform Üzerinden Yönetin!</h4>
                                    <ul>
                                        {overview_list.map((item, i)  =>  <li key={i}> <i className="fal fa-check"></i> <p> {item} </p> </li> )}
                                    </ul>
                                </div>
                                <div className="sv-details-text-2">
                                    <h4 className="sv-details-text-title">{challange_titel}</h4>
                                    <p>{challange_des}</p>
                                </div>
                                <div className="tp-faq-area pt-50">
                                    <div className="container p-0">
                                        <div className="row g-0">
                                            <div className="col-xl-12">
                                                <h4 className="sv-details-title">Sıkça Sorulan Sorular</h4>
                                                <AnswerQuestion style={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HukukDestekSistemiArea;