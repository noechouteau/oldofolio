
const btnCv = document.getElementById("cv");
const imageCv = document.getElementById("imgCv");
const btnLinkd = document.getElementById("linkedin");
const imageLinkd = document.getElementById("imgLinkd");
const btnMail = document.getElementById("mail");
const imageMail = document.getElementById("imgMail");

btnCv.addEventListener("mouseover", () => {
    imageCv.src = "assets/cvBlack.png";
    });

btnCv.addEventListener("mouseout", () => {
    imageCv.src = "assets/cv.png";
    });

btnLinkd.addEventListener("mouseover", () => {
    imageLinkd.src = "assets/linkedinBlack.png";
    }
    );

btnLinkd.addEventListener("mouseout", () => {
    imageLinkd.src = "assets/linkedin.png";
    }
    );

btnMail.addEventListener("mouseover", () => {
    imageMail.src = "assets/mailBlack.png";
    }
    );

btnMail.addEventListener("mouseout", () => {
    imageMail.src = "assets/mail.png";
    }
    );
    