import { useState } from "react";
import MainLayout from "@/layout/layout";
import style from "@/styles/Profil.module.css";
import other from "@/styles/Home.module.css";
import { Button, Modal, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Dmitrij() {
  const {t} = useTranslation('portfolio')
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [delayedOpen, setDelayedOpen] = useState(false);

  const handleOpen = (imageUrl) => {
    setSelectedImage(imageUrl);
    setDelayedOpen(true);
    setTimeout(() => {
      setOpen(true);
    }, 200); // 300ms delay
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setDelayedOpen(false);
    }, 300); // 300ms delay to allow for closing animation
  };

  const profil = {
    name: t("dmitrij.name"),
    slag: "dmitrij",
    biography:
      t("dmitrij.biography"),
    countImg: 15,
  };

  const generateImageUrls = () =>
    Array.from(
      { length: profil.countImg },
      (_, i) => `img/biography/${profil.slag}/picture/${i + 1}.png`
    );

  const imageUrls = generateImageUrls();

  return (
    <>
      <MainLayout>
        <div className={`${other.gridContainerM} ${open ? style.backgroundBlur : ''}`}>
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
              <div> <p>{profil.biography}</p></div>
            </div>
            <div id="images" className={style.images}>
              {imageUrls.map((url, index) => (
                <img
                  className={style.img}
                  key={index}
                  src={url}
                  alt={`Image ${index + 1}`}
                  width="360px"
                  height="480px"
                  onClick={() => handleOpen(url)}
                />
              ))}
            </div>

            <div className={style.buttonDiv}>
              <Button
                className={style.button}
                sx={{
                  "&.MuiButton-text": {
                    fontFamily: " 'Montserrat', sans-serif",
                    fontWeight: " 500",
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

      <Modal
        open={delayedOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            transition: "transform 0.3s ease-in-out",
            transform: `translate(-50%, -50%) scale(${open ? 1.3 : 0}) !important`,
          }}
          className={`${style.modalBox} `}
        >
          <div>
            <img
              src={selectedImage}
              alt="Selected"
              className={style.modalImage}
            />
            <Button
              className={style.closeButton}
              onClick={handleClose}
              sx={{
                backgroundColor: "none",
                color: "#00F3BC",
                borderRadius: "50%",
                minWidth: "40px",
                minHeight: "40px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.707 6.707a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 10-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293z"
                  fill="#00F3BC"
                />
              </svg>
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
