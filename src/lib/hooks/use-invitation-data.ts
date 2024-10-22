import config from "@/lib/config";
import { OurStoryProps } from "@/types/our-story-props";

export default function useInvitationData(invitation: any, isTemplate = false) {
  const story: OurStoryProps = {
    imgGroom: "/images/couple/groom-story.png",
    imgBride: "/images/couple/bride-story.png",
    quoteGroom:
      "Sebagai seorang pria Muslim, saya selalu berusaha menjalani hidup  dengan sebaik-baiknya, berpegang pada ajaran Islam dan terus  memperbaiki diri. Dalam perjalanan mencari jodoh, saya merasa  perlu untuk melakukan ikhtiar yang benar dan memutuskan untuk  menjalani proses taaruf. Meskipun perjalanan ini penuh tantangan,  dengan izin Allah, saya memberanikan diri untuk melangkah maju,  berharap agar Allah memberi petunjuk dan keberkahan dalam setiap  langkah yang saya ambil.",
    quoteBride:
      "Di atas masa penantian dan harapan yang panjang, akhirnya saya menemukan sosok pria yang sejati, insya Allah memiliki akhlak yang baik. Setelah melewati proses yang penuh doa dan harapan, dan setelah melakukan shalat istiqarah, hati saya merasa mantap untuk menerima peminangan tersebut. Saya percaya bahwa Allah telah menunjukkan jalan terbaik bagi kami berdua, dan saya siap untuk memulai babak baru dalam hidup dengan penuh keyakinan dan doa.",
  };
  let {
    name_man: nameMan,
    nickname_man: nicknameMan,
    prefix_man: prefixMan,
    title_man: titleMan,
    father_man: fatherMan,
    mother_man: motherMan,
    description_man: descriptionMan,
    name_woman: nameWoman,
    nickname_woman: nicknameWoman,
    prefix_woman: prefixWoman,
    title_woman: titleWoman,
    father_woman: fatherWoman,
    mother_woman: motherWoman,
    description_woman: descriptionWoman,
    start_date: receptionStartDate,
    end_date: receptionEndDate,
    start_time: receptionStartTime,
    endT_time: receptionEndTime,
    time_zone: receptionTimezone,
    location: receptionLocation,
    address: receptionAddress,
    man_media: manMedia,
    woman_media: womanMedia,
    man_story: manStory,
    woman_story: womanStory,
    video_url: videoUrl,
    wedding_ceremony,
  } = invitation || {};

  let {
    start_date: ceremonyStartDate,
    end_date: ceremonyEndDate,
    start_time: ceremonyStartTime,
    end_time: ceremonyEndTime,
    time_zone: ceremonyTimezone,
    location: ceremonyLocation,
    address: ceremonyAddress,
  } = wedding_ceremony || {};

  let ceremonyStartDateString;
  let ceremonyStartDateWithFullMonth;
  let ceremonyStartDateTime;
  if (invitation) {
    let startDate = new Date(ceremonyStartDate);
    ceremonyStartDateString = `${startDate.getUTCDate()} ${
      startDate.getMonth() + 1
    } ${startDate.getFullYear()}`;

    ceremonyStartDateWithFullMonth = startDate.toLocaleDateString("en-UK", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    ceremonyStartDateTime = ceremonyStartDate;
  }

  if (isTemplate) {
    prefixMan = "";
    nameMan = "Azka";
    nicknameMan = "Azka";
    titleMan = "";
    fatherMan = "";
    motherMan = "";
    descriptionMan = "Azka";
    prefixWoman = "";
    nameWoman = "Zeldya";
    nicknameWoman = "Zeldya";
    titleWoman = "";
    fatherWoman = "";
    motherWoman = "";
    descriptionWoman = "Zeldya";
    ceremonyStartDateString = "02 10 2025";
    ceremonyStartDateWithFullMonth = "25 February 2025";
    ceremonyStartDateTime = "2025-02-25T07:00:00";
    ceremonyStartTime = "07:00";
    ceremonyEndTime = "08:00";
    receptionStartTime = "10:00";
    receptionEndTime = "13:00";
    ceremonyLocation =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25290.95474578179!2d114.60485266193213!3d-3.3314483022037584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423e3adcd9d9f%3A0x1b5ad295e2204466!2sSwiss-Belhotel%20Borneo%20Banjarmasin!5e0!3m2!1sid!2sid!4v1726833580741!5m2!1sid!2sid";
  }

  if (!isTemplate) {
    let manPhoto: string | undefined = !manMedia[0]
      ? undefined
      : manMedia[0].photo_url;
    if (manPhoto?.startsWith("undefined")) {
      manPhoto = `${config.apiUrl}${manPhoto.split("undefined")[1]}`;
    }
    let womanPhoto: string | undefined = !womanMedia[0]
      ? undefined
      : womanMedia[0].photo_url;
    if (womanPhoto?.startsWith("undefined")) {
      womanPhoto = `${config.apiUrl}${womanPhoto.split("undefined")[1]}`;
    }

    console.log(manPhoto);

    story.imgGroom = manPhoto ?? story.imgGroom;
    story.imgBride = womanPhoto ?? story.imgBride;
    story.quoteGroom = descriptionMan;
    story.quoteBride = descriptionWoman;
  }
  return {
    nameMan,
    nicknameMan,
    prefixMan,
    titleMan,
    fatherMan,
    motherMan,
    descriptionMan,
    nameWoman,
    nicknameWoman,
    prefixWoman,
    titleWoman,
    fatherWoman,
    motherWoman,
    descriptionWoman,
    receptionStartDate,
    receptionEndDate,
    receptionStartTime,
    receptionEndTime,
    receptionTimezone,
    receptionLocation,
    receptionAddress,
    manMedia,
    womanMedia,
    manStory,
    womanStory,
    videoUrl,
    ceremonyStartDate,
    ceremonyEndDate,
    ceremonyStartTime,
    ceremonyEndTime,
    ceremonyTimezone,
    ceremonyLocation,
    ceremonyAddress,
    ceremonyStartDateString,
    ceremonyStartDateWithFullMonth,
    ceremonyStartDateTime,
    story,
  };
}
