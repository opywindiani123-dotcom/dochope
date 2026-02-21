const btn = document.getElementById("checkZodiac");
const result = document.querySelector(".result");
const zodiacName = document.getElementById("zodiacName");
const zodiacMessage = document.getElementById("zodiacMessage");
const shareBtn = document.getElementById("shareBtn");

btn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const dateValue = document.getElementById("birthdate").value;

  if (!name || !dateValue) {
    alert("Nama & tanggal lahir wajib diisi ✨");
    return;
  }

  const date = new Date(dateValue);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  let zodiac = "";

  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) zodiac = "Aries ♈";
  else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) zodiac = "Taurus ♉";
  else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) zodiac = "Gemini ♊";
  else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) zodiac = "Cancer ♋";
  else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) zodiac = "Leo ♌";
  else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) zodiac = "Virgo ♍";
  else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) zodiac = "Libra ♎";
  else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) zodiac = "Scorpio ♏";
  else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) zodiac = "Sagittarius ♐";
  else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) zodiac = "Capricorn ♑";
  else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) zodiac = "Aquarius ♒";
  else zodiac = "Pisces ♓";

  const messages = {
    "Aries ♈": `${name}, keberanianmu membuat semesta jatuh cinta padamu ✨`,
    "Taurus ♉": `${name}, ketulusanmu memberi rasa aman 🌱`,
    "Gemini ♊": `${name}, kata-katamu selalu memikat 💬`,
    "Cancer ♋": `${name}, hatimu hangat dan tulus 🌙`,
    "Leo ♌": `${name}, kamu bersinar alami ✨`,
    "Virgo ♍": `${name}, perhatian kecilmu bermakna 📌`,
    "Libra ♎": `${name}, kamu membawa kedamaian ⚖️`,
    "Scorpio ♏": `${name}, cintamu dalam 🦂`,
    "Sagittarius ♐": `${name}, hidup bersamamu petualangan 🏹`,
    "Capricorn ♑": `${name}, kamu penuh komitmen 🏔️`,
    "Aquarius ♒": `${name}, keunikanmu istimewa 💡`,
    "Pisces ♓": `${name}, cintamu lembut 🌊`
  };

  zodiacName.textContent = zodiac;
  zodiacMessage.textContent = messages[zodiac];

  result.classList.add("show");
  document.body.classList.add("reveal");

  if (navigator.vibrate) navigator.vibrate(80);
});

shareBtn.addEventListener("click", () => {
  const text = encodeURIComponent(
    `${zodiacName.innerText}\n${zodiacMessage.innerText}`
  );
  window.open(`https://wa.me/?text=${text}`, "_blank");
});
const zodiacData = {
  Aries: [
    "Kamu tipe yang nggak suka basa-basi. Jujur aja, kadang terlalu spontan, tapi niatmu selalu tulus.",
    "Kamu kelihatan kuat, padahal capek juga. Tapi anehnya kamu tetap jalan terus.",
    "Ambisi kamu besar, cuma kadang lupa istirahat. Jangan keras sama diri sendiri.",
"Kamu cepat bergerak, tapi jarang berhenti buat nanya: aku sebenernya capek nggak sih?",
"Kamu kelihatan berani, padahal hatimu gampang kebentur.",
"Kamu nggak suka nunggu, tapi sering nunggu orang paham kamu."
  ],
  Taurus: [
    "Kamu setia banget, tapi sekali kecewa… susah balik lagi.",
    "Kamu kelihatan tenang, padahal kalau sudah nyaman kamu paling manja.",
    "Banyak yang salah paham sama kamu. Mereka nggak tahu kalau kamu cuma butuh rasa aman.",
"Kamu bertahan lebih lama dari yang seharusnya, cuma karena kamu berharap.",
"Kamu nggak butuh banyak, cuma butuh yang konsisten.",
"Kamu kelihatan keras kepala, padahal kamu cuma takut kehilangan."
  ],
  Gemini: [
    "Kepalamu rame, hatimu juga. Kamu bukan berubah-ubah, cuma terlalu banyak yang kamu pikirkan.",
    "Kamu pintar ngobrol, tapi jarang cerita yang benar-benar kamu rasain.",
    "Orang kira kamu santai, padahal kamu overthinking hampir tiap malam.",
"Kamu sering ketawa buat nutupin pikiran yang ribut.",
"Kamu pengen dimengerti, tapi bingung cara jelasin perasaan sendiri.",
"Kamu cepat nyambung, tapi susah benar-benar terbuka."
  ],
  Cancer: [
    "Kamu kelihatan kuat buat orang lain, tapi paling gampang capek secara emosional.",
    "Kamu peduli banget sama orang, sampai lupa jaga perasaan sendiri.",
    "Hatimu lembut, cuma sering ketemu orang yang nggak ngerti caranya menghargai.",
"Kamu ngerawat banyak orang, tapi lupa ngerawat diri sendiri.",
"Kamu gampang terikat, karena hatimu tulus.",
"Kamu sering diem bukan karena nggak peduli, tapi karena terlalu peduli."
  ],
  Leo: [
    "Kamu suka kelihatan percaya diri, padahal kamu juga butuh diakui.",
    "Kamu kuat, tapi kalau lagi jatuh, kamu pengennya sendirian.",
    "Hatimu besar, cuma nggak semua orang pantas dapat versi terbaikmu.",
"Kamu kelihatan kuat, tapi kalau sendirian kamu mikir banyak hal.",
"Kamu pengen dihargai, bukan cuma dipuji.",
"Kamu sering ngasih lebih, berharap dibales sama tulus."
  ],
  Virgo: [
    "Kamu perfeksionis karena kamu peduli, bukan karena pengen ribet.",
    "Kamu sering mikirin orang lain, tapi jarang ditanyain kabarnya.",
    "Standar kamu tinggi, termasuk ke diri sendiri. Kadang itu bikin kamu capek.",
"Kamu ingin semuanya rapi, karena hidupmu sering terasa berantakan.",
"Kamu bantu banyak orang, tapi jarang minta tolong.",
"Kamu keras ke diri sendiri, padahal kamu sudah cukup."
  ],
  Libra: [
    "Kamu pengen semua baik-baik aja, sampai lupa apa yang kamu mau.",
    "Kamu sering ngalah biar nggak ribut, padahal hatimu nggak selalu oke.",
    "Kamu bukan ragu-ragu, kamu cuma pengen semuanya adil.",
"Kamu sering bingung milih, karena kamu mikirin semua orang.",
"Kamu pengen damai, walau kadang harus ngalah.",
"Kamu kelihatan santai, tapi hatimu penuh pertimbangan."
  ],
  Scorpio: [
    "Kamu kelihatan dingin, padahal perasaanmu paling dalam.",
    "Sekali kamu percaya, kamu total. Tapi kalau dikhianati, kamu diam dan pergi.",
    "Kamu nggak banyak cerita, tapi sekali bicara, itu serius.",
"Kamu baca situasi lebih dalam dari yang orang kira.",
"Kamu diam bukan karena nggak peduli, tapi karena lagi jaga diri.",
"Kamu nggak mudah percaya, karena sekali luka rasanya lama."
  ],
  Sagittarius: [
    "Kamu bebas, tapi kadang kesepian juga.",
    "Kamu ketawa paling keras, tapi kalau sedih kamu simpan sendiri.",
    "Kamu jalan terus ke depan, walau kadang belum tahu arahnya.",
"Kamu pengen bebas, tapi juga pengen dimengerti.",
"Kamu lari ke depan, supaya nggak mikir yang di belakang.",
"Kamu ceria di luar, tapi reflektif di dalam."
  ],
  Capricorn: [
    "Kamu kuat karena terbiasa. Bukan karena nggak pernah capek.",
    "Kamu mikir masa depan terus, sampai lupa menikmati hari ini.",
    "Kamu jarang minta bantuan, padahal kamu juga butuh ditemani.",
"Kamu tangguh karena terbiasa memikul beban sendiri.",
"Kamu jarang cerita, karena nggak mau merepotkan.",
"Kamu terus jalan, walau hatimu pengen istirahat."
  ],
  Aquarius: [
    "Kamu beda, dan itu bukan kelemahan.",
    "Kamu peduli banyak hal, tapi susah jelasin perasaan sendiri.",
    "Kamu sering merasa nggak dipahami, padahal kamu cuma jujur jadi diri sendiri.",
"Kamu punya dunia sendiri yang nggak semua orang ngerti.",
"Kamu peduli banyak hal, tapi susah nunjukin perasaan.",
"Kamu pengen diterima apa adanya, tanpa harus berubah."
  ],
  Pisces: [
    "Kamu terlalu baik untuk dunia yang kadang kejam.",
    "Kamu ngerasa dalam, tapi sering nggak dianggap serius.",
    "Hatimu luas, tapi kamu juga perlu belajar membatasi.",
"Kamu ngerasa lebih dalam dari yang bisa kamu jelaskan.",
"Kamu sering mengalah, karena hatimu lembut.",
"Kamu mudah tersentuh, tapi juga mudah terluka."
  ]
};

function getZodiac(day, month) {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
  return "Pisces";
}

document.getElementById("checkZodiac").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;

  if (!name || !birthdate) {
    alert("Isi nama dan tanggal lahir dulu ya 🙂");
    return;
  }

  const date = new Date(birthdate);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const zodiac = getZodiac(day, month);
  const messages = zodiacData[zodiac];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  document.getElementById("zodiacName").innerText = `${name}, kamu ${zodiac}`;
  document.getElementById("zodiacMessage").innerText = randomMessage;
});