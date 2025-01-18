import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import MainLayout from "@/layout/layout";
import style from "@/styles/Profil.module.css";
import other from "@/styles/Home.module.css";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Viewer from 'viewerjs';

import {serverSideTranslations} from 'next-i18next';
import 'viewerjs/dist/viewer.css';
export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['portfolio'])),
    },
  };
}

export default function Dmitrij() {
  const { t } = useTranslation("portfolio");
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const viewerRef = useRef(null);

  const profil = {
    name: t("dmitrij.name"),
    slag: "dmitrij",
    biography: t("dmitrij.biography"),
    countImg: 15,
  };

  const generateImageUrls = () =>
    Array.from(
      { length: profil.countImg },
      (_, i) => ({
        src: `img/biography/${profil.slag}/picture/${i + 1}.png`,
        alt: `Image ${i + 1}`
      })
    );

  const imageUrls = generateImageUrls();

  useEffect(() => {
    if (open && viewerRef.current) {
      const viewer = new Viewer(viewerRef.current, {
        scalable: true,
        backdrop: true,
        button: true,
        focus: false,
        fullscreen: true,
        loading: false,
        loop: false,
        keyboard: true,
        movable: false,
        navbar: false,
        rotatable: false,
        slideOnTouch: false,
        title: false,
        toggleOnDblclick: false,
        toolbar: false,
        tooltip: false,
        transition: true,
        zoomable: false,
        zoomOnTouch: false,
        zoomOnWheel: false
      });

      return () => {
        viewer.destroy();
      };
    }
  }, [open]);

  const handleOpen = (index) => {
    setCurrentImageIndex(index);
    setSelectedImages(imageUrls);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MainLayout>
        <div className={`${other.gridContainerM} `}>
          <div />
          <div className={style.profil}>
            <span className={other.backgroundTitle}>{profil.name}</span>
            <h4 className={other.title}>{profil.name}</h4>
            <div>
              <div className={style.biography}>
                <img
                  src={`img/biography/${profil.slag}/Photo.png`}
                  alt={`${profil.name}`}
                />
                <div>
                  <p>{profil.biography}</p>
                </div>
              </div>
              <div id="images" className={style.images} ref={viewerRef}>
                {imageUrls.map((url, index) => (
                  <img
                    className={style.img}
                    key={index}
                    src={url.src}
                    alt={url.alt}
                    width="360px"
                    height="480px"
                    onClick={() => handleOpen(index)}
                  />
                ))}
              </div>

              <div className={style.buttonDiv}>
                <Button
                  className={style.button}
                  sx={{
                    "&.MuiButton-text": {
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "500",
                      fontSize: "24px",
                      textAlign: "center",
                      color: "#fff",
                      textTransform: "none",
                    },
                  }}
                >
                  {t("button")}
                </Button>
              </div>
            </div>
          </div>
          <div />
        </div>
      </MainLayout>
    </>
  );
}
