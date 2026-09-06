/**
 * Sri Vinayaka Subramanya Ayyappa Swamy Devasthanam
 * Interactive Engine & Bilingual State Controller
 */

// Global Configuration
const TEMPLE_CONFIG = {
  nameEn: "Sri Vinayaka Subramanya Ayyappa Swamy Devasthanam",
  nameTe: "శ్రీ వినాయక సుబ్రమణ్య అయ్యప్ప స్వామి దేవస్థానం",
  addressEn: "4-7-12/21, Ravindranagar, Savarkar Nagar, Baba Nagar, Nacharam, Secunderabad, Telangana 500076",
  addressTe: "సావర్కర్ నగర్, నాచారం-X రోడ్, మేడ్చల్-మల్కాజ్గిరి, హైదరాబాద్-076",
  bankName: "Punjab National Bank",
  bankBranch: "Nacharam Branch, Hyderabad",
  accountNo: "1582102100001322",
  ifscCode: "PUNB0158210",
  chairmanNameEn: "Sri C.S. Mallesh",
  chairmanNameTe: "శ్రీ సి.యస్. మల్లేష్",
  chairmanRoleEn: "Chairman – Temple Committee",
  chairmanRoleTe: "చైర్మన్ - ఆలయ కమిటీ",
  helplinePhone: "+91 98490 00000",
  whatsappNumber: "919849000000" // Replace with committee WhatsApp number
};

// Bilingual Dictionary
const TRANSLATIONS = {
  en: {
    masthead_temple_name: "Sri Vinayaka Subramanya Ayyappa Swamy Devasthanam",
    masthead_location: "Savarkar Nagar, Nacharam X Road, Medchal-Malkajgiri Dist, Hyderabad - 500076",
    nav_brand_title: "Sri Vinayaka Subramanya Ayyappa Swamy Devasthanam",
    nav_brand_sub: "Nacharam, Secunderabad",
    
    nav_home: "Home",
    nav_deities: "Deities",
    nav_timings: "Timings & Pujas",
    nav_events: "Events & Festivals",
    nav_donations: "Donations & Bank",
    nav_seva: "Annadanam & Seva",
    nav_poster: "Committee Circular",
    nav_location: "Location",
    nav_donate_btn: "Donate (విరాళం)",
    
    events_tag: "Temple Calendar",
    events_title: "Upcoming Festivals & Announcements",
    events_subtitle: "Participate in auspicious temple festivals, Brahmotsavams, and special homams.",
    events_filter_all: "All Celebrations",
    events_filter_ayyappa: "Ayyappa Swamy",
    events_filter_vinayaka: "Lord Vinayaka",
    events_filter_subramanya: "Lord Subramanya",
    events_btn_inquire: "Inquire on WhatsApp",
    events_live_badge: "Live Announcements",
    
    ticker_invocation: "ॐ Sri Ganeshayana Namaha | ॐ Saravanabhavaya Namaha | Swamiye Saranam Ayyappa",
    ticker_timings_tag: "Darshan: 6:00 AM – 8:00 PM Daily",
    
    hero_badge: "Sacred Sanctum in Nacharam, Secunderabad",
    hero_title: "Sri Vinayaka Subramanya Ayyappa Swamy Devasthanam",
    hero_subtitle: "Experience divine bliss, serenity, and spiritual upliftment under the benevolent blessings of Lord Vinayaka, Lord Subramanya, and Lord Ayyappa Swamy.",
    hero_btn_darshan: "View Darshan Timings",
    hero_btn_donate: "Temple Donations & Bank Details",
    
    strip_open_label: "Temple Status",
    strip_open_val: "Open All 7 Days: 6:00 AM – 8:00 PM",
    strip_loc_label: "Location",
    strip_loc_val: "Savarkar Nagar, Nacharam X Road",
    strip_rating_label: "Devotee Reviews",
    strip_rating_val: "4.5 ★ Rating (Google Maps)",
    
    deities_tag: "Sacred Shrines",
    deities_title: "The Holy Presiding Deities",
    deities_subtitle: "Three divine energies blessing devotees with wisdom, courage, health, and spiritual liberation.",
    
    deity_vinayaka_title: "Lord Sri Vinayaka",
    deity_vinayaka_sub: "శ్రీ వినాయక స్వామి (విఘ్నేశ్వరుడు)",
    deity_vinayaka_desc: "The remover of all hurdles and granter of intellect and auspicious beginnings. Devotees offer Modakas, Garika (durva grass), and coconut deepams for success in education, business, and new ventures.",
    deity_vinayaka_mantra: "Vakratunda Mahakaya Suryakoti Samaprabha | Nirvighnam Kuru Me Deva Sarvakaryeshu Sarvada",
    deity_vinayaka_special: "Special Pujas: Sankatahara Chaturthi, Vinayaka Chavithi Brahmotsavam",
    
    deity_subramanya_title: "Lord Sri Subramanya Swamy",
    deity_subramanya_sub: "శ్రీ సుబ్రమణ్య స్వామి (కార్తికేయ / మురుగన్)",
    deity_subramanya_desc: "The divine commander of celestial forces, embodying radiant valor and healing energy. Devotees worship Lord Murugan with his holy Vel (spear) for courage, Kuja Dosha Nivarana, and family peace.",
    deity_subramanya_mantra: "Om Saravana Bhavaya Namaha | Shadananaya Vidmahe Subramanyaya Dheemahi",
    deity_subramanya_special: "Special Pujas: Skanda Sashti, Subrahmanya Sashti, Krittika Deepam",
    
    deity_ayyappa_title: "Lord Sri Ayyappa Swamy",
    deity_ayyappa_sub: "శ్రీ అయ్యప్ప స్వామి (హరిహరపుత్ర / ధర్మశాస్త్ర)",
    deity_ayyappa_desc: "The embodiment of ascetic discipline, purity, and universal equality. Lord Ayyappa grants refuge to all devotees undertaking the sacred 41-day Mandala Deeksha, Irumudi Kattu, and Padi Pooja.",
    deity_ayyappa_mantra: "Swamiye Saranam Ayyappa | Harivarasanam Viswamohanam",
    deity_ayyappa_special: "Special Pujas: Mandala Makaravilakku Mahotsavam, Padi Pooja, Annadanam",
    
    timings_tag: "Agama Daily Schedule",
    timings_title: "Darshan & Puja Timings",
    timings_subtitle: "Join the daily worship rituals and receive the sacred teertha and prasadam.",
    timing_morning_title: "Morning Schedule",
    timing_evening_title: "Evening Schedule",
    
    donations_tag: "Sacred Fund & Bank Transfer",
    donations_title: "Temple Donations & Building Fund",
    donations_subtitle: "Contribute wholeheartedly to temple development, daily pujas, and Annadanam directly into the temple's official bank account.",
    bank_heading: "Official Punjab National Bank Account",
    bank_acc_label: "Account Number",
    bank_ifsc_label: "IFSC Code",
    bank_branch_label: "Bank Branch",
    btn_copy_acc: "Copy A/C No",
    btn_copy_ifsc: "Copy IFSC",
    chairman_quote: "Devotees who wish to offer donations to the temple may deposit directly into the bank account mentioned above and obtain a proper official receipt.",
    
    upi_heading: "Scan & Pay via Bharat UPI",
    upi_sub: "Direct transfer with 0% transaction fees into PNB account",
    upi_custom_label: "Select Donation Amount:",
    btn_open_upi: "Pay via UPI App (GPay / PhonePe / Paytm)",
    
    receipt_heading: "Report Donation & Request Receipt",
    receipt_sub: "After transferring funds, submit your details to receive an official temple receipt.",
    form_name: "Devotee Full Name",
    form_gotram: "Gotram & Nakshatram",
    form_phone: "WhatsApp Phone Number",
    form_amount: "Amount Contributed (₹)",
    form_utr: "UTR / Transaction Ref Number",
    btn_submit_receipt: "Submit via WhatsApp for Official Receipt",
    
    poster_tag: "Official Circular",
    poster_title: "Temple Committee Fundraising Appeal",
    poster_desc: "View the official circular issued by the Temple Committee under the leadership of Chairman Sri C.S. Mallesh for temple development activities.",
    btn_view_poster: "Click to View Full Size Poster",
    
    seva_tag: "Devotional Services",
    seva_title: "Nitya Annadanam & Seva Booking",
    seva_subtitle: "Earn spiritual merit by sponsoring sacred food distribution, flower decorations, and perpetual worship.",
    
    loc_tag: "Visit Nacharam Temple",
    loc_title: "Location & Directions",
    loc_subtitle: "Conveniently located in Savarkar Nagar near Nacharam Crossroads, Secunderabad.",
    btn_open_maps: "Open in Google Maps",
    btn_copy_addr: "Copy Address",
    
    committee_title: "Temple Committee & Administration",
    committee_sub: "Dedicated to preserving our sacred sanatan traditions and serving the devotee community."
  },
  
  te: {
    masthead_temple_name: "శ్రీ వినాయక సుబ్రమణ్య అయ్యప్ప స్వామి దేవస్థానం",
    masthead_location: "సావర్కర్ నగర్, నాచారం-X రోడ్, మేడ్చల్-మల్కాజ్గిరి జిల్లా, హైదరాబాద్ - 500076",
    nav_brand_title: "శ్రీ వినాయక సుబ్రమణ్య అయ్యప్ప స్వామి దేవస్థానం",
    nav_brand_sub: "నాచారం, సికింద్రాబాద్",
    
    nav_home: "ప్రారంభం",
    nav_deities: "దేవతా మూర్తులు",
    nav_timings: "దర్శన వేళలు & పూజలు",
    nav_events: "ఉత్సవాలు & ప్రకటనలు",
    nav_donations: "విరాళాలు & బ్యాంక్",
    nav_seva: "అన్నదానం & సేవలు",
    nav_poster: "ఆలయ ప్రకటన",
    nav_location: "మార్గం & చిరునామా",
    nav_donate_btn: "విరాళం ఇవ్వండి",
    
    events_tag: "ఆలయ పంచాంగం & ఉత్సవాలు",
    events_title: "రాబోయే పండుగలు & విశేష ఉత్సవాలు",
    events_subtitle: "స్వామివార్ల బ్రహ్మోత్సవాలు, విశేష పూజలు మరియు హోమాలలో పాల్గొని కృపాకటాక్షాలను పొందండి.",
    events_filter_all: "అన్ని ఉత్సవాలు",
    events_filter_ayyappa: "అయ్యప్ప స్వామి",
    events_filter_vinayaka: "శ్రీ వినాయక స్వామి",
    events_filter_subramanya: "శ్రీ సుబ్రమణ్య స్వామి",
    events_btn_inquire: "వాట్సాప్‌లో వివరాలు అడగండి",
    events_live_badge: "లైవ్ అప్‌డేట్",
    
    ticker_invocation: "ఓం శ్రీ గణేశాయ నమః | ఓం శరవణభవాయ నమః | స్వామియే శరణం అయ్యప్ప",
    ticker_timings_tag: "దర్శనం: ఉదయం 6:00 నుండి రాత్రి 8:00 వరకు",
    
    hero_badge: "నాచారం - సికింద్రాబాద్ పుణ్యక్షేత్రం",
    hero_title: "శ్రీ వినాయక సుబ్రమణ్య అయ్యప్ప స్వామి దేవస్థానం",
    hero_subtitle: "శ్రీ వినాయకుడు, శ్రీ సుబ్రమణ్యేశ్వరుడు, శ్రీ అయ్యప్ప స్వామివార్ల దివ్య సన్నిధిలో భక్తిపారవశ్యం, శాంతి మరియు ఆధ్యాత్మిక ఆనందాన్ని పొందండి.",
    hero_btn_darshan: "దర్శన వేళలు చూడండి",
    hero_btn_donate: "ఆలయ విరాళాలు & బ్యాంక్ వివరాలు",
    
    strip_open_label: "ఆలయ స్థితి",
    strip_open_val: "ప్రతిరోజూ తెరిచియుండును: ఉదయం 6:00 – రాత్రి 8:00",
    strip_loc_label: "చిరునామా",
    strip_loc_val: "సావర్కర్ నగర్, నాచారం-X రోడ్",
    strip_rating_label: "భక్తుల అనుభవాలు",
    strip_rating_val: "4.5 ★ రేటింగ్ (గూగుల్ మ్యాప్స్)",
    
    deities_tag: "పుణ్య సన్నిధులు",
    deities_title: "శ్రీ దేవతా మూర్తులు",
    deities_subtitle: "జ్ఞానం, ధైర్యం, ఆరోగ్యం మరియు సర్వశ్రేయస్సులను ప్రసాదించే త్రిమూర్తి స్వరూపులు.",
    
    deity_vinayaka_title: "శ్రీ వినాయక స్వామి",
    deity_vinayaka_sub: "విఘ్నేశ్వరుడు - ప్రథమ పూజితుడు",
    deity_vinayaka_desc: "సర్వ విఘ్నాలను తొలగించి, కార్యసిద్ధిని ప్రసాదించే గణపతి దేవుడు. చదువు, వ్యాపారం, గృహారంభాలలో సఫలతకై మోదకాలు, గరిక పూజలు విశేషంగా జరుపబడును.",
    deity_vinayaka_mantra: "వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ | నిర్విఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా",
    deity_vinayaka_special: "విశేష పూజలు: సంకష్టహర చతుర్థి, వినాయక చవితి బ్రహ్మోత్సవాలు",
    
    deity_subramanya_title: "శ్రీ సుబ్రమణ్య స్వామి",
    deity_subramanya_sub: "కార్తికేయుడు / మురుగన్ / స్కందుడు",
    deity_subramanya_desc: "దివ్య శక్తికి, ధైర్యానికి అధిపతి. భక్తులను కుజదోషాల నుండి కాపాడి, కుటుంబ సౌఖ్యాన్ని ప్రసాదించే దివ్య వేలాయుధధారి.",
    deity_subramanya_mantra: "ఓం శరవణ భవాయ నమః | షడాననాయ విద్మహే సుబ్రహ్మణ్యాయ ధీమహి",
    deity_subramanya_special: "విశేష పూజలు: స్కంద షష్ఠి, సుబ్రహ్మణ్య షష్ఠి, కృత్తికా దీపం",
    
    deity_ayyappa_title: "శ్రీ అయ్యప్ప స్వామి",
    deity_ayyappa_sub: "హరిహరపుత్రుడు / మణికంఠ స్వామి",
    deity_ayyappa_desc: "సకల ధర్మాల రక్షకుడు, ఆపద్భాంధవుడు. 41 రోజుల మండల దీక్షలు, ఇరుముడి కట్టు మరియు పడిపూజల ద్వారా భక్తులకు మోక్షాన్ని అనుగ్రహించే దయామయుడు.",
    deity_ayyappa_mantra: "స్వామియే శరణం అయ్యప్ప | హరివరాసనం విశ్వమోహనం",
    deity_ayyappa_special: "విశేష పూజలు: మండల-మకరవిళక్కు మహోత్సవం, పడిపూజ, అన్నదానం",
    
    timings_tag: "నిత్య కైంకర్యాలు",
    timings_title: "దర్శన వేళలు & నిత్య పూజలు",
    timings_subtitle: "నిత్య పూజలు, అభిషేకాలు, హారతి సమయాలలో పాల్గొని స్వామివారి తీర్థ ప్రసాదాలను స్వీకరించండి.",
    timing_morning_title: "ఉదయ కాల వేళలు",
    timing_evening_title: "సాయంకాల వేళలు",
    
    donations_tag: "ఆలయ నిధి & బ్యాంక్ వివరాలు",
    donations_title: "ఆలయ విరాళాలు & అభివృద్ధి నిధి",
    donations_subtitle: "ఆలయ నిర్మాణం, నిత్య పూజలు మరియు అన్నదాన కార్యక్రమాలకు మీ చేతనైన విరాళాన్ని నేరుగా ఆలయ ఖాతాలో జమచేయగలరు.",
    bank_heading: "పంజాబ్ నేషనల్ బ్యాంక్ అధికారిక ఖాతా",
    bank_acc_label: "ఖాతా సంఖ్య (A/C No)",
    bank_ifsc_label: "ఐ.ఎఫ్.ఎస్.సి కోడ్ (IFSC)",
    bank_branch_label: "బ్యాంక్ బ్రాంచ్",
    btn_copy_acc: "ఖాతా సంఖ్య కాపీ చేయండి",
    btn_copy_ifsc: "IFSC కాపీ చేయండి",
    chairman_quote: "ఎవరైన దేవాలయానికి విరాళాలు ఇవ్వదలచిన దాతలు పైన చెప్పిన బ్యాంకు ఖాతాలో జమచేసి తగు రశీదు పొందగలరు.",
    
    upi_heading: "భారత్ UPI ద్వారా క్షణాల్లో విరాళం",
    upi_sub: "ఎటువంటి అదనపు రుసుము లేకుండా నేరుగా ఆలయ ఖాతాకు చేరును",
    upi_custom_label: "విరాళ మొత్తం ఎంచుకోండి:",
    btn_open_upi: "UPI యాప్‌తో చెల్లించండి (GPay / PhonePe / Paytm)",
    
    receipt_heading: "రశీదు కొరకు మీ వివరాలు నమోదు చేయండి",
    receipt_sub: "బ్యాంకులో జమచేసిన తర్వాత మీ అధికారిక రశీదు కొరకు క్రింది వివరాలను పంపగలరు.",
    form_name: "దాత పూర్తి పేరు",
    form_gotram: "గోత్రము & నక్షత్రము",
    form_phone: "వాట్సాప్ మొబైల్ నంబర్",
    form_amount: "జమచేసిన మొత్తం (₹)",
    form_utr: "ట్రాన్సాక్షన్ సంఖ్య (UTR No)",
    btn_submit_receipt: "వాట్సాప్ ద్వారా రశీదు కోరండి",
    
    poster_tag: "అధికారిక ప్రకటన",
    poster_title: "ఆలయ కమిటీ విజ్ఞప్తి పత్రం",
    poster_desc: "ఆలయ కమిటీ చైర్మన్ శ్రీ సి.యస్. మల్లేష్ గారి నేతృత్వంలో ఆలయ అభివృద్ధి కొరకు విడుదల చేసిన అధికారిక విజ్ఞప్తి పత్రం.",
    btn_view_poster: "పూర్తి పత్రాన్ని వీక్షించండి",
    
    seva_tag: "పుణ్య కార్యాలు",
    seva_title: "నిత్య అన్నదానం & సేవలు",
    seva_subtitle: "స్వామివారి సన్నిధిలో అన్నదానం, పుష్పాలంకరణ, దీపారాధనలను స్పాన్సర్ చేసి పుణ్యాన్ని పొందండి.",
    
    loc_tag: "ఆలయ దర్శనం చేసుకోండి",
    loc_title: "ఆలయ మార్గం & చిరునామా",
    loc_subtitle: "సావర్కర్ నగర్, నాచారం-X రోడ్, మేడ్చల్-మల్కాజ్గిరి జిల్లా, హైదరాబాద్-500076.",
    btn_open_maps: "గూగుల్ మ్యాప్స్ లో చూడండి",
    btn_copy_addr: "చిరునామా కాపీ చేయండి",
    
    committee_title: "ఆలయ కమిటీ & పాలకవర్గం",
    committee_sub: "సనాతన ధర్మ రక్షణకై, భక్తుల సేవలకై నిరంతరం శ్రమిస్తున్న కమిటీ సభ్యులు."
  }
};

let currentLang = 'en';
let selectedDonationAmount = 501;

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initDonationEngine();
  initCopyButtons();
  initReceiptForm();
  initImageModal();
  initMobileMenu();
  initScrollSpy();
  initEventsEngine();
});

/**
 * Language Controller
 */
function initLanguage() {
  const toggleButtons = document.querySelectorAll('.lang-toggle-btn');
  
  // Restore saved language or default to English
  const savedLang = localStorage.getItem('temple_lang') || 'en';
  setLanguage(savedLang);

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'te' : 'en';
      setLanguage(nextLang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('temple_lang', lang);
  
  const toggleButtons = document.querySelectorAll('.lang-toggle-btn');
  if (lang === 'te') {
    document.body.classList.add('lang-te');
    document.documentElement.lang = 'te';
    toggleButtons.forEach(btn => btn.innerHTML = '🌐 English');
  } else {
    document.body.classList.remove('lang-te');
    document.documentElement.lang = 'en';
    toggleButtons.forEach(btn => btn.innerHTML = '🌐 తెలుగు');
  }

  // Update all data-i18n elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Re-render events with updated language
  if (typeof renderEvents === 'function') {
    renderEvents(currentEventCategory);
  }
}

/**
 * UPI Donation & Dynamic QR Code Engine
 */
function initDonationEngine() {
  const amountPills = document.querySelectorAll('.amount-pill');
  const qrImage = document.getElementById('upiQrImage');
  const upiDeepLinkBtn = document.getElementById('upiDeepLinkBtn');

  function updateQr(amount) {
    selectedDonationAmount = amount;
    
    // Construct standard UPI URI
    // upi://pay?pa=PUNB01582101582102100001322@pnb&pn=Sri+Vinayaka+Subramanya+Ayyappa+Devasthanam&am=501&cu=INR&tn=Temple+Donation
    const payeeVpa = "1582102100001322@punb0158210.ifsc.npci"; // Direct NPCI account+IFSC URI
    const payeeName = encodeURIComponent("Sri Vinayaka Subramanya Ayyappa Devasthanam");
    const note = encodeURIComponent("Temple Donation Nacharam");
    const upiUrl = `upi://pay?pa=${payeeVpa}&pn=${payeeName}&am=${amount}&cu=INR&tn=${note}`;
    
    // Update Deep link for mobile users
    if (upiDeepLinkBtn) {
      upiDeepLinkBtn.href = upiUrl;
    }

    // Generate dynamic QR image using reliable fast SVG QR service
    if (qrImage) {
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(upiUrl)}&margin=6&color=88-19-55`;
    }

    // Update active pill state
    amountPills.forEach(pill => {
      if (parseInt(pill.getAttribute('data-amount')) === amount) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Also auto-fill form amount
    const formAmountInput = document.getElementById('formAmount');
    if (formAmountInput) {
      formAmountInput.value = amount;
    }
  }

  amountPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const amt = parseInt(pill.getAttribute('data-amount'));
      updateQr(amt);
    });
  });

  // Initial load with default ₹501
  updateQr(501);
}

/**
 * Copy to Clipboard Helper with Toast
 */
function initCopyButtons() {
  const copyAccBtn = document.getElementById('copyAccBtn');
  const copyIfscBtn = document.getElementById('copyIfscBtn');
  const copyAddrBtn = document.getElementById('copyAddrBtn');

  if (copyAccBtn) {
    copyAccBtn.addEventListener('click', () => {
      copyTextToClipboard(TEMPLE_CONFIG.accountNo, currentLang === 'te' ? "ఖాతా సంఖ్య కాపీ చేయబడింది!" : "Account number copied!");
    });
  }

  if (copyIfscBtn) {
    copyIfscBtn.addEventListener('click', () => {
      copyTextToClipboard(TEMPLE_CONFIG.ifscCode, currentLang === 'te' ? "IFSC కోడ్ కాపీ చేయబడింది!" : "IFSC code copied!");
    });
  }

  if (copyAddrBtn) {
    copyAddrBtn.addEventListener('click', () => {
      const addr = currentLang === 'te' ? TEMPLE_CONFIG.addressTe : TEMPLE_CONFIG.addressEn;
      copyTextToClipboard(addr, currentLang === 'te' ? "ఆలయ చిరునామా కాపీ చేయబడింది!" : "Temple address copied!");
    });
  }
}

function copyTextToClipboard(text, successMsg) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (err) {
    showToast("Copy failed, please select and copy manually.");
  }
  document.body.removeChild(textArea);
}

function showToast(msg) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>🕉️</span> <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/**
 * Donation Receipt Submission via WhatsApp Direct
 */
function initReceiptForm() {
  const form = document.getElementById('donationReceiptForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('formName').value.trim();
    const gotram = document.getElementById('formGotram').value.trim();
    const phone = document.getElementById('formPhone').value.trim();
    const amount = document.getElementById('formAmount').value.trim();
    const utr = document.getElementById('formUtr').value.trim();

    if (!name || !amount || !utr) {
      showToast(currentLang === 'te' ? "దయచేసి పేరు, మొత్తం మరియు UTR నమోదు చేయండి." : "Please fill required fields (Name, Amount, UTR).");
      return;
    }

    const message = 
`🕉️ *శ్రీ వినాయక సుబ్రమణ్య అయ్యప్ప స్వామి దేవస్థానం, నాచారం*
*విరాళం రశీదు అభ్యర్థన / Donation Receipt Request*
---------------------------------------
👤 *దాత పేరు / Devotee Name:* ${name}
🪔 *గోత్రము & నక్షత్రం / Gotram:* ${gotram || 'N/A'}
📱 *మొబైల్ / Phone:* ${phone || 'N/A'}
💰 *మొత్తం / Amount:* ₹${amount}
🏷️ *ట్రాన్సాక్షన్ సంఖ్య / UTR:* ${utr}
🏦 *బ్యాంక్:* Punjab National Bank (A/c: 1582102100001322)
---------------------------------------
దయచేసి ఆలయ అధికారిక రశీదును పంపగలరు.
Please issue the official temple receipt.`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${TEMPLE_CONFIG.whatsappNumber}?text=${encodedMsg}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    showToast(currentLang === 'te' ? "వాట్సాప్ తెరవబడింది. రశీదు సందేశం పంపండి!" : "WhatsApp opened. Send the message for your receipt!");
  });
}

/**
 * Image Modal Lightbox for Deity Shrines and Official Circular
 */
function initImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const closeBtn = document.getElementById('modalCloseBtn');
  
  if (!modal || !modalImg || !closeBtn) return;

  window.openImageModal = function(src, caption) {
    modalImg.src = src;
    modalCaption.textContent = caption || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/**
 * Mobile Navigation Drawer
 */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  
  if (!hamburgerBtn || !navMenu) return;

  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

/**
 * Scroll Spy for Active Navigation
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * ==========================================================================
 * Google Sheet Live CMS & Events Engine
 * Allows the temple committee to add/update events from a Google Sheet or Google Form
 * ==========================================================================
 */
const GOOGLE_SHEET_CONFIG = {
  // Enter the Public Google Sheet ID here (e.g., '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms')
  // If left blank or if network fails, the website automatically falls back to the default temple calendar below!
  sheetId: "",
  sheetName: "Events"
};

// Built-in Default Temple Calendar (Automatic Offline Fallback)
const DEFAULT_EVENTS = [
  {
    id: "mandala-kalam",
    category: "ayyappa",
    badgeEn: "Annual Grand Festival",
    badgeTe: "వార్షిక మహోత్సవం",
    dateEn: "Nov 17, 2026 – Jan 14, 2027",
    dateTe: "కార్తీక 1 – మకర సంక్రాంతి",
    timeEn: "Daily 6:00 AM – 8:30 PM",
    timeTe: "ఉదయం 6:00 – రాత్రి 8:30",
    titleEn: "Mandala Kalam & Makaravilakku Mahotsavam",
    titleTe: "మండల కాలం & మకరవిళక్కు మహోత్సవం",
    descEn: "41-day sacred Mandala Deeksha period. Daily Nitya Padi Pooja, Sastha Preethi, Irumudi Kattu, and grand Annadanam for thousands of Ayyappa devotees.",
    descTe: "41 రోజుల పవిత్ర మండల దీక్షా కాలం. ప్రతిరోజూ నిత్య పడిపూజ, శాస్తాప్రీతి, ఇరుముడి కట్టు మరియు వేలాదిమంది అయ్యప్ప స్వాములకు మహా అన్నదాన కార్యక్రమం.",
    specialEn: "Special Padi Pooja every evening during Karthika & Margashira months.",
    specialTe: "కార్తీక, మార్గశిర మాసాలలో ప్రతిరోజూ సాయంత్రం దివ్య పడిపూజ."
  },
  {
    id: "vinayaka-chavithi",
    category: "vinayaka",
    badgeEn: "Brahmotsavam",
    badgeTe: "బ్రహ్మోత్సవాలు",
    dateEn: "Bhadrapada Shukla Chavithi",
    dateTe: "భాద్రపద శుద్ధ చవితి",
    timeEn: "8:00 AM – 9:00 PM",
    timeTe: "ఉదయం 8:00 – రాత్రి 9:00",
    titleEn: "Sri Vinayaka Chavithi Brahmotsavam",
    titleTe: "శ్రీ వినాయక చవితి మహోత్సవాలు",
    descEn: "Maha Ganapathi Homam, Sahasra Modaka Havanam, and Vishesha Panchamrita Abhishekam. Cultural devotional bhajans in the evening.",
    descTe: "మహా గణపతి హోమం, సహస్ర మోదక హవనం, విశేష పంచామృతాభిషేకం మరియు సాయంత్రం భక్తి సంగీత విభావరి.",
    specialEn: "Devotees can sponsor Modakam and Garika Archana.",
    specialTe: "భక్తులు మోదక మరియు గరిక అష్టోత్తర పూజలలో పాల్గొనవచ్చు."
  },
  {
    id: "subramanya-sashti",
    category: "subramanya",
    badgeEn: "Auspicious Sashti",
    badgeTe: "విశేష షష్ఠి",
    dateEn: "Margashira Shukla Sashti",
    dateTe: "మార్గశిర శుద్ధ షష్ఠి",
    timeEn: "7:00 AM – 8:00 PM",
    timeTe: "ఉదయం 7:00 – రాత్రి 8:00",
    titleEn: "Sri Subramanya Swamy Sashti & Kavadi",
    titleTe: "శ్రీ సుబ్రహ్మణ్య షష్ఠి & కావడి ఉత్సవం",
    descEn: "Celebration of Lord Kartikeya's divine victory. Special Vel Pooja, Kuja Dosha Nivarana Homam, and Sri Valli Devasena Kalyanam.",
    descTe: "శ్రీ వల్లీ దేవసేన సమేత సుబ్రహ్మణ్యేశ్వర స్వామి దివ్య కళ్యాణ మహోత్సవం, విశేష వేల్ పూజ మరియు కుజదోష నివారణ హోమం.",
    specialEn: "Milk Abhishekam and flower kavadi offerings.",
    specialTe: "స్వామివారికి క్షీరాభిషేకం మరియు పుష్ప కావడి సమర్పణ."
  },
  {
    id: "sankatahara-chaturthi",
    category: "vinayaka",
    badgeEn: "Monthly Special",
    badgeTe: "మాస విశేషం",
    dateEn: "Every Krishna Paksha Chaturthi",
    dateTe: "ప్రతి కృష్ణపక్ష చతుర్థి (ప్రతినెల)",
    timeEn: "Evening 5:30 PM",
    timeTe: "సాయంత్రం 5:30",
    titleEn: "Monthly Sankatahara Chaturthi Vratam",
    titleTe: "మాస సంకష్టహర చతుర్థి వ్రతం",
    descEn: "Removal of chronic distress, debt, and obstacles in career through sacred Sankashtahara Ganapathi Archana and Chandra Darshanam.",
    descTe: "సర్వ సంకటాలను, రుణబాధలను తొలగించే సంకష్టహర గణపతి విశేష అభిషేకం, అర్చన మరియు చంద్రోదయ వేళ మహా మంగళ హారతి.",
    specialEn: "Teertha prasadam distribution following moonrise.",
    specialTe: "చంద్ర దర్శనానంతరం తీర్థ ప్రసాద వితరణ."
  }
];

let loadedEvents = [...DEFAULT_EVENTS];
let currentEventCategory = 'all';

async function initEventsEngine() {
  const container = document.getElementById('eventsContainer');
  if (!container) return;

  // Check URL param ?sheet=... or localStorage or GOOGLE_SHEET_CONFIG.sheetId
  const urlParams = new URLSearchParams(window.location.search);
  const paramSheetId = urlParams.get('sheet');
  if (paramSheetId) {
    localStorage.setItem('temple_sheet_id', paramSheetId.trim());
  }
  const activeSheetId = (paramSheetId || localStorage.getItem('temple_sheet_id') || GOOGLE_SHEET_CONFIG.sheetId || '').trim();

  // If a Google Sheet ID is provided, fetch live events
  if (activeSheetId !== '') {
    const liveEvents = await fetchGoogleSheetEvents(activeSheetId, GOOGLE_SHEET_CONFIG.sheetName);
    if (liveEvents && liveEvents.length > 0) {
      loadedEvents = liveEvents;
      const indicatorText = document.querySelector('.live-sheet-indicator [data-i18n="events_live_badge"]');
      if (indicatorText) {
        indicatorText.textContent = currentLang === 'te' ? 'ప్రత్యక్ష గూగుల్ షీట్ అనుసంధానం' : 'Live Google Sheet Sync';
      }
    }
  }

  // Setup category filter tabs
  const filterBtns = document.querySelectorAll('.event-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentEventCategory = btn.getAttribute('data-category');
      renderEvents(currentEventCategory);
    });
  });

  renderEvents('all');
}

function renderEvents(category) {
  const container = document.getElementById('eventsContainer');
  if (!container) return;

  const filtered = category === 'all' 
    ? loadedEvents 
    : loadedEvents.filter(ev => ev.category === category);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>${currentLang === 'te' ? 'ఈ విభాగంలో ప్రస్తుతం విశేష ఉత్సవాలు లేవు.' : 'No special events listed in this category currently.'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(ev => {
    const title = currentLang === 'te' ? (ev.titleTe || ev.titleEn) : ev.titleEn;
    const date = currentLang === 'te' ? (ev.dateTe || ev.dateEn) : ev.dateEn;
    const time = currentLang === 'te' ? (ev.timeTe || ev.timeEn) : ev.timeEn;
    const desc = currentLang === 'te' ? (ev.descTe || ev.descEn) : ev.descEn;
    const special = currentLang === 'te' ? (ev.specialTe || ev.specialEn) : ev.specialEn;
    const badge = currentLang === 'te' ? (ev.badgeTe || ev.badgeEn) : ev.badgeEn;
    
    // Category Deity Badge Icon
    let categoryIcon = '🕉️';
    let categoryName = 'Temple Festival';
    if (ev.category === 'ayyappa') {
      categoryIcon = '🪔';
      categoryName = currentLang === 'te' ? 'అయ్యప్ప స్వామి' : 'Ayyappa Swamy';
    } else if (ev.category === 'vinayaka') {
      categoryIcon = '🌺';
      categoryName = currentLang === 'te' ? 'శ్రీ వినాయక స్వామి' : 'Lord Vinayaka';
    } else if (ev.category === 'subramanya') {
      categoryIcon = '✨';
      categoryName = currentLang === 'te' ? 'శ్రీ సుబ్రమణ్య స్వామి' : 'Lord Subramanya';
    }

    const whatsappInquiryUrl = `https://wa.me/${TEMPLE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      `🕉️ Sri Vinayaka Subramanya Ayyappa Devasthanam, Nacharam\nInquiry regarding upcoming event: ${title} (${date})`
    )}`;

    return `
      <div class="event-card" data-category="${ev.category}">
        <div class="event-card-top">
          <span class="event-badge">${badge}</span>
          <span class="event-category-tag">${categoryIcon} ${categoryName}</span>
        </div>
        
        <h3 class="event-title">${title}</h3>
        
        <div class="event-meta">
          <div class="event-meta-item">
            <span class="meta-icon">📅</span>
            <span>${date}</span>
          </div>
          <div class="event-meta-item">
            <span class="meta-icon">⏰</span>
            <span>${time}</span>
          </div>
        </div>

        <p class="event-desc">${desc}</p>

        ${special ? `
          <div class="event-special-box">
            <span style="color: var(--sacred-red);">🪔</span>
            <span>${special}</span>
          </div>
        ` : ''}

        <div class="event-card-footer">
          <a href="${whatsappInquiryUrl}" target="_blank" class="btn-event-inquire">
            <span>💬</span> ${currentLang === 'te' ? 'వాట్సాప్‌లో వివరాలు అడగండి' : 'Inquire on WhatsApp'}
          </a>
        </div>
      </div>
    `;
  }).join('');
}

async function fetchGoogleSheetEvents(sheetId, sheetName) {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName || 'Events')}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const text = await res.text();
    const jsonString = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const data = JSON.parse(jsonString);
    const rows = data.table.rows;
    if (!rows || rows.length === 0) return null;

    const events = [];
    rows.forEach((row, i) => {
      const c = row.c;
      if (!c || !c[0] || !c[0].v) return;
      const isActive = c[8] ? String(c[8].v).toUpperCase() !== 'FALSE' : true;
      if (!isActive) return;

      events.push({
        id: `sheet-event-${i}`,
        titleEn: c[0] ? String(c[0].v) : '',
        titleTe: c[1] ? String(c[1].v) : (c[0] ? String(c[0].v) : ''),
        dateEn: c[2] ? String(c[2].v) : '',
        dateTe: c[2] ? String(c[2].v) : '',
        timeEn: c[3] ? String(c[3].v) : '',
        timeTe: c[3] ? String(c[3].v) : '',
        category: c[4] ? String(c[4].v).toLowerCase().trim() : 'ayyappa',
        badgeEn: 'Live Announcement',
        badgeTe: 'తాజా ప్రకటన',
        descEn: c[5] ? String(c[5].v) : '',
        descTe: c[6] ? String(c[6].v) : (c[5] ? String(c[5].v) : ''),
        specialEn: c[7] ? String(c[7].v) : '',
        specialTe: c[7] ? String(c[7].v) : ''
      });
    });
    return events.length > 0 ? events : null;
  } catch (err) {
    console.warn("Google Sheet sync fallback to default calendar:", err);
    return null;
  }
}
