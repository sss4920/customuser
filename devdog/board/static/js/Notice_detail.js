var bannerPage = "1";

function contentBannerLeft() {
  if (bannerPage == "1") {
  }

  if (bannerPage == "2") {
    document.getElementsByClassName('cb1_2')[0].style.display = "none";
    document.getElementsByClassName('cb1_1')[0].style.display = "block";
    bannerPage = "1";
  }

  if (bannerPage == "3") {
    document.getElementsByClassName('cb1_3')[0].style.display = "none";
    document.getElementsByClassName('cb1_2')[0].style.display = "block";
    bannerPage = "2";
  }
}

function contentBannerRight() {
  if (bannerPage == "3") {
  }

  if (bannerPage == "2") {
    document.getElementsByClassName('cb1_2')[0].style.display = "none";
    document.getElementsByClassName('cb1_3')[0].style.display = "block";
    bannerPage = "3";
  }

  if (bannerPage == "1") {
    document.getElementsByClassName('cb1_1')[0].style.display = "none";
    document.getElementsByClassName('cb1_2')[0].style.display = "block";
    bannerPage = "2";
  }
}
