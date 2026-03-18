// =============================================
// data.js — Translation strings, form templates
// =============================================

const T = {
  mr: {
    lang:'mr',
    topbarTxt:"🇮🇳 भारत सरकार &nbsp;|&nbsp; अधिकृत ग्रामपंचायत संकेतस्थळ",
    skip:"मजकुरावर जा", sr:"स्क्रीन रीडर प्रवेश",
    subheading:"पांगरटाटी ग्रामपंचायत | पातूर, अकोला | अधिकृत संकेतस्थळ",
    h1:"पांगरटाटी ग्रामपंचायत",
    tagline:"गट: पातूर &nbsp;|&nbsp; जिल्हा: अकोला &nbsp;|&nbsp; राज्य: महाराष्ट्र &nbsp;|&nbsp; पिन: 444501",
    jaiHind:"जय हिंद 🇮🇳",
    navHome:"मुखपृष्ठ",navAbout:"परिचय",navMem:"सदस्य",navSvc:"सेवा",
    navSch:"योजना",navNt:"सूचनाफलक",navGal:"फोटो",navBdg:"अर्थसंकल्प",navRti:"RTI",navCon:"संपर्क",
    heroBadge:"🌿 अधिकृत शासकीय संकेतस्थळ",
    heroH2:"पांगरटाटी ग्रामपंचायत",
    heroP:"पारदर्शकता, जबाबदारी आणि सामुदायिक सहभागाने आपल्या गावातील प्रत्येक कुटुंबाच्या कल्याण व विकासासाठी कार्यरत।",
    heroBtn1:"सेवा पाहा",heroBtn2:"ताज्या सूचना",
    statPop:"लोकसंख्या",statWard:"वार्ड सदस्य",statSch:"शासकीय योजना",statVil:"गावे",
    mq:["ग्रामसभा बैठक निश्चित – सूचनाफलक पाहा","PM आवास योजनेसाठी अर्ज सुरू – पंचायत कार्यालयाशी संपर्क करा","मनरेगा जॉब कार्ड उपलब्ध – आत्ता अर्ज करा","जन्म व मृत्यू दाखले पंचायत कार्यालयातून मिळवता येतात","स्वच्छ भारत मिशन – आपले गाव स्वच्छ ठेवा!"],
    svcTitle:"आमच्या सेवा",svcSub:"पांगरटाटी ग्रामपंचायतीकडून सर्व रहिवाशांना प्रदान करण्यात येणाऱ्या अधिकृत सेवा",
    applyBtn:"ऑनलाइन अर्ज करा",
    svc:[
      {icon:"📄",title:"जन्म दाखला",desc:"पंचायत क्षेत्रातील सर्व रहिवाशांसाठी जन्म नोंदणी व अधिकृत जन्म दाखला।"},
      {icon:"🪦",title:"मृत्यू दाखला",desc:"कायदेशीर व शासकीय कारणांसाठी आवश्यक अधिकृत मृत्यू दाखला।"},
      {icon:"🏠",title:"रहिवास दाखला",desc:"ग्रामपंचायतीकडून जारी केलेला अधिकृत रहिवास पुरावा दाखला।"},
      {icon:"💳",title:"उत्पन्न दाखला",desc:"विविध शासकीय लाभांसाठी उत्पन्न व जात दाखले।"},
      {icon:"💧",title:"पाणी व स्वच्छता",desc:"पेयजल पुरवठा व्यवस्थापन आणि स्वच्छतासुविधा तक्रारी व विनंत्या।"},
      {icon:"🛣️",title:"रस्ते व पायाभूत सुविधा",desc:"गाव रस्ते देखभाल, पथदीप दुरुस्ती आणि सार्वजनिक पायाभूत सुविधा विनंत्या।"},
      {icon:"🗳️",title:"मतदार ओळखपत्र सहाय्य",desc:"मतदार नोंदणी, दुरुस्ती आणि मतदार यादी अद्ययावत करण्यास मदत।"},
      {icon:"📊",title:"ना-हरकत प्रमाणपत्र",desc:"बांधकाम, व्यापार व इतर नियामक गरजांसाठी NOC।"}
    ],
    ntTitle:"सूचनाफलक",ntSub:"पांगरटाटी ग्रामपंचायतीच्या अधिकृत घोषणा व सार्वजनिक सूचना",
    ntHeader:"📋 अधिकृत सूचना व घोषणा",
    nt:[
      ["मार्च 2026","<strong>ग्रामसभा बैठक सूचना</strong> – सर्व रहिवाशांना कळविण्यात येते की त्रैमासिक ग्रामसभा बैठक [तारीख] रोजी [ठिकाण] येथे सकाळी 10:00 वाजता होईल। वार्ड सदस्यांची उपस्थिती अनिवार्य आहे।",true],
      ["फेब्रुवारी 2026","<strong>PM आवास योजना (ग्रामीण) – अर्ज सुरू</strong> – पात्र बेघर व कच्च्या घरातील रहिवासी पंचायत कार्यालयात अर्ज करू शकतात. आवश्यक: आधार कार्ड, BPL प्रमाणपत्र, बँक पासबुक।",true],
      ["जानेवारी 2026","<strong>मनरेगा जॉब कार्ड नोंदणी</strong> – रोजगार हवे असलेले रहिवासी पंचायत कार्यालयात नोंदणी करू शकतात. 100 दिवसांचे हमीचे काम दिले जाईल।",false],
      ["डिसेंबर 2025","<strong>वार्षिक अर्थसंकल्प 2025–26 मंजूर</strong> – पांगरटाटी ग्रामपंचायतीचा वार्षिक अर्थसंकल्प ग्रामसभेत मंजूर झाला आहे। प्रत कार्यालयात उपलब्ध।",false],
      ["नोव्हेंबर 2025","<strong>स्वच्छ भारत मिशन मोहीम</strong> – गाव स्वच्छता मोहीम निश्चित आहे। सर्व कुटुंबांनी स्वच्छ परिसर राखावा।",false]
    ],
    galTitle:"फोटो गॅलरी",galSub:"पांगरटाटी ग्रामपंचायतीच्या विकास कार्यांचे व उपक्रमांचे छायाचित्रे",
    memTitle:"निर्वाचित प्रतिनिधी",memSub:"वर्ष 2021–2026 साठी निर्वाचित ग्रामपंचायत सदस्य",
    memRoles:["सरपंच (अध्यक्ष)","उप-सरपंच","वार्ड पंच","वार्ड पंच","वार्ड पंच","वार्ड पंच","ग्रामसेवक","रोजगार सहायक"],
    memWards:["पांगरटाटी ग्रामपंचायत","उपप्रमुख","वार्ड क्र. 1","वार्ड क्र. 2","वार्ड क्र. 3","वार्ड क्र. 4","ग्रामसेवक","रोजगार सहायक"],
    schTitle:"शासकीय योजना",schSub:"पांगरटाटी पंचायत रहिवाशांसाठी केंद्र व राज्य शासनाच्या योजना",schApply:"अर्ज करा",
    sch:[
      {icon:"🏘️",title:"PM आवास योजना (ग्रामीण)",desc:"सर्वांसाठी घर – पात्र बेघर ग्रामीण कुटुंबांना मोफत पक्के घर।",key:"pmay"},
      {icon:"⛏️",title:"मनरेगा",desc:"प्रति कुटुंब प्रति वर्ष 100 दिवसांचे हमीभावाचे वेतन रोजगार।",key:"mgnrega"},
      {icon:"🚰",title:"जल जीवन मिशन",desc:"प्रत्येक ग्रामीण घरात नळाचे पाणी।",key:"jjm"},
      {icon:"🌾",title:"PM किसान सम्मान निधी",desc:"पात्र शेतकऱ्यांना 3 हप्त्यांत ₹6,000/वर्ष थेट उत्पन्न सहाय्य।",key:"pmkisan"},
      {icon:"🩺",title:"आयुष्मान भारत (PMJAY)",desc:"BPL कुटुंबांना ₹5 लाखाचे आरोग्य विमा संरक्षण।",key:"pmjay"},
      {icon:"🚽",title:"स्वच्छ भारत मिशन",desc:"उघड्यावर शौचास जाण्यापासून मुक्तीसाठी वैयक्तिक शौचालय बांधणी।",key:"sbm"},
      {icon:"⚡",title:"PM सौभाग्य योजना",desc:"BPL कुटुंबांसह प्रत्येक घरात वीज जोडणी।",key:"saubhagya"},
      {icon:"🍚",title:"PM गरीब कल्याण अन्न योजना",desc:"पात्र लाभार्थ्यांना दरमहा प्रतिव्यक्ती 5 किलो मोफत धान्य।",key:"pmgkay"},
      {icon:"👩","title":"महिला समृद्धी योजना",desc:"महिला सशक्तीकरण व बचत गट (SHG) आर्थिक सहाय्य योजना।",key:"mahila"},
      {icon:"📚",title:"समग्र शिक्षा अभियान",desc:"ग्रामीण मुलांसाठी मोफत प्राथमिक व माध्यमिक शिक्षण सहाय्य।",key:"siksha"}
    ],
    abtTitle:"पांगरटाटीबद्दल",abtSub:"पांगरटाटी ग्रामपंचायत – स्थान, लोकसंख्याशास्त्र आणि प्रशासन",
    abtRows:["पंचायतीचे नाव","गट","जिल्हा","राज्य","पिन कोड","एकूण क्षेत्रफळ","एकूण लोकसंख्या","वार्डांची संख्या","गावांची संख्या","एकूण कुटुंबे","ग्रामपंचायत कोड"],
    abtVals:["पांगरटाटी ग्रामपंचायत","पातूर","अकोला","महाराष्ट्र","444501","7.09 चौ.किमी","~940 (जनगणना 2011)","9 वार्ड","3 गावे","~220 कुटुंबे","530354"],
    bdgTitle:"अर्थसंकल्प व आर्थिक अहवाल",bdgSub:"सार्वजनिक निधी वापरात पारदर्शकता",
    bdg:[["📊","वार्षिक अर्थसंकल्प 2025–26","वित्तीय वर्ष 2025-26 साठी मंजूर अर्थसंकल्प.","PDF डाउनलोड करा →"],["📑","खर्च अहवाल","सर्व शीर्षकांतर्गत निधी वापर दर्शविणारा अहवाल.","PDF डाउनलोड करा →"],["🏗️","विकासकामांची यादी","वित्तीय वर्ष 2025-26 मध्ये मंजूर व पूर्ण झालेल्या कामांची यादी.","तपशील पाहा →"],["📋","ग्रामसभा इतिवृत्त","सर्व ग्रामसभा बैठकांचे इतिवृत्त.","नोंदी पाहा →"]],
    rtiTitle:"📜 माहितीचा अधिकार (RTI)",rtiP:"RTI कायदा 2005 अंतर्गत, नागरिकांना या ग्रामपंचायतीकडून माहिती मागण्याचा अधिकार आहे।<br>आपला RTI अर्ज ग्रामसेवकाकडे (जन माहिती अधिकारी) सादर करा।",
    rtiBtn1:"PIO शी संपर्क करा",rtiBtn2:"RTI ऑनलाइन दाखल करा →",
    conTitle:"आमच्याशी संपर्क करा",conSub:"कोणत्याही प्रश्नासाठी पांगरटाटी ग्रामपंचायत कार्यालयाशी संपर्क साधा",
    conAddrL:"कार्यालय पत्ता",conAddrV:"पांगरटाटी ग्रामपंचायत भवन,<br>गाव – पांगरटाटी, पो. – पातूर,<br>पातूर, अकोला – 444501, महाराष्ट्र",
    conPhL:"दूरध्वनी",conPhV:"[+91-XXXXX-XXXXX]",
    conMobL:"सरपंच मोबाईल",conMobV:"[+91-XXXXX-XXXXX]",
    conEmL:"ईमेल",conEmV:"pangartati.gp@maharashtra.gov.in",
    conHrL:"कार्यालय वेळ",conHrV:"सोमवार ते शनिवार: सकाळी 10:00 – सायंकाळी 5:00<br>रविवार व शासकीय सुट्ट्या: बंद",
    qlTitle:"द्रुत दुवे",
    ftAboutT:"पांगरटाटी ग्रामपंचायत",ftAboutP:"पांगरटाटी ग्रामपंचायत, अकोला, महाराष्ट्र, भारत यांचे अधिकृत संकेतस्थळ. आमच्या गावाच्या विकासासाठी पारदर्शक व जबाबदार शासनाप्रति वचनबद्ध।",
    ftQL:"द्रुत दुवे",ftRes:"संसाधने",ftHelp:"मदत",
    ftLinks:["मुखपृष्ठ","पंचायत परिचय","सदस्य","सेवा","योजना"],
    ftRes2:["सूचना","अर्थसंकल्प","RTI","e-Gram Swaraj","मनरेगा"],
    ftHelp2:["संपर्क करा","अस्वीकरण","गोपनीयता धोरण","साइट मॅप","प्रवेशयोग्यता"],
    copyright:"© 2026 पांगरटाटी ग्रामपंचायत. सर्व हक्क राखीव.",
    lastUpd:"अंतिम अद्ययावत: मार्च 2026",webPol:"वेबसाइट धोरण",
    fL:{
      name:"अर्जदाराचे पूर्ण नाव",fname:"वडिलांचे / पतीचे नाव",dob:"जन्म तारीख",gender:"लिंग",
      mobile:"मोबाईल नंबर",email:"ईमेल (ऐच्छिक)",addr:"संपूर्ण पत्ता",village:"गाव",
      ward:"वार्ड क्रमांक",aadhar:"आधार क्रमांक",purpose:"उद्देश",relation:"मृताशी नाते",
      dod:"मृत्यू तारीख",deceased:"मृताचे नाव",income:"वार्षिक उत्पन्न",caste:"जात",
      category:"प्रवर्ग",landArea:"जमीन क्षेत्र (एकर)",bankAcc:"बँक खाते क्रमांक",ifsc:"IFSC कोड",
      bankName:"बँक नाव",complaint:"तक्रारीचे वर्णन",location:"तक्रारीचे ठिकाण",
      boothNo:"बूथ क्रमांक",voterIdNo:"मतदार ओळखपत्र क्रमांक",reason:"सुधारणेचे कारण",
      nocType:"NOC प्रकार",propertyAddr:"मालमत्तेचा पत्ता",memberCount:"कुटुंब सदस्य संख्या",
      rationCard:"रेशन कार्ड क्रमांक",
      genderOpts:["निवडा","पुरुष","महिला","इतर"],
      castOpts:["निवडा","SC","ST","OBC","NT","SBC","General"],
      nocOpts:["निवडा","बांधकाम NOC","व्यापार NOC","वाहतूक NOC","इतर"],
      wardOpts:["निवडा","वार्ड 1","वार्ड 2","वार्ड 3","वार्ड 4","वार्ड 5","वार्ड 6","वार्ड 7","वार्ड 8","वार्ड 9"],
      submit:"अर्ज सादर करा",reset:"साफ करा",
      uploadDocs:"कागदपत्रे अपलोड करा",uploadHint:"आधार कार्ड, रेशन कार्ड, फोटो इ. (PDF/JPG)",
      successTitle:"अर्ज यशस्वीरित्या सादर झाला!",
      successMsg:"तुमचा अर्ज प्राप्त झाला आहे. पंचायत कार्यालय 7 कार्यदिवसांत तुमच्याशी संपर्क करेल.",
      refLabel:"संदर्भ क्रमांक",
      notice:"📋 सूचना: हा ऑनलाइन अर्ज प्राथमिक नोंदणीसाठी आहे. मूळ कागदपत्रांसाठी पंचायत कार्यालयात भेट द्यावी लागेल.",
      reqDoc:"आवश्यक कागदपत्रे",
    }
  },
  en: {
    lang:'en',
    topbarTxt:"🇮🇳 Government of India &nbsp;|&nbsp; Official Gram Panchayat Website",
    skip:"Skip to Content",sr:"Screen Reader Access",
    subheading:"Pangartati Gram Panchayat | Patur, Akola | Official Website",
    h1:"Pangartati Gram Panchayat",
    tagline:"Block: Patur &nbsp;|&nbsp; District: Akola &nbsp;|&nbsp; State: Maharashtra &nbsp;|&nbsp; PIN: 444501",
    jaiHind:"Jai Hind 🇮🇳",
    navHome:"Home",navAbout:"About",navMem:"Members",navSvc:"Services",
    navSch:"Schemes",navNt:"Notices",navGal:"Gallery",navBdg:"Budget",navRti:"RTI",navCon:"Contact",
    heroBadge:"🌿 Official Government Website",
    heroH2:"Pangartati Gram Panchayat",
    heroP:"Working for the welfare and development of every household in our village with transparency, accountability and community participation.",
    heroBtn1:"View Services",heroBtn2:"Latest Notices",
    statPop:"Population",statWard:"Ward Members",statSch:"Govt Schemes",statVil:"Villages",
    mq:["Gram Sabha Meeting scheduled – Check Notice Board","Applications open for PM Awas Yojana – Contact Panchayat Office","MGNREGA Job Cards available – Apply Now","Birth & Death Certificates from Panchayat Office","Swachh Bharat Mission – Keep our village clean!"],
    svcTitle:"Our Services",svcSub:"Official services provided by Pangartati Gram Panchayat to all residents",
    applyBtn:"Apply Online",
    svc:[
      {icon:"📄",title:"Birth Certificate",desc:"Register births and obtain official birth certificates for all residents of the Panchayat area."},
      {icon:"🪦",title:"Death Certificate",desc:"Obtain official death certificates required for legal and government purposes."},
      {icon:"🏠",title:"Residence Certificate",desc:"Official domicile and residence proof certificates issued by the Gram Panchayat."},
      {icon:"💳",title:"Income Certificate",desc:"Income and caste certificates for residents for various government benefits."},
      {icon:"💧",title:"Water & Sanitation",desc:"Drinking water supply management and sanitation facility complaints and requests."},
      {icon:"🛣️",title:"Road & Infrastructure",desc:"Village road maintenance, streetlight repairs, and public infrastructure requests."},
      {icon:"🗳️",title:"Voter ID Assistance",desc:"Help with voter registration, corrections, and electoral roll updates."},
      {icon:"📊",title:"No Objection Certificate",desc:"NOC issued for construction, trade, and other regulatory requirements."}
    ],
    ntTitle:"Notice Board",ntSub:"Official announcements and public notices from Pangartati Gram Panchayat",
    ntHeader:"📋 Official Notices & Announcements",
    nt:[
      ["Mar 2026","<strong>Gram Sabha Meeting Notice</strong> – All residents are informed that the quarterly Gram Sabha meeting will be held on [Date] at [Venue] at 10:00 AM. Attendance is mandatory for Ward Members.",true],
      ["Feb 2026","<strong>PM Awas Yojana (Gramin) – Applications Open</strong> – Eligible residents may apply at the Panchayat office. Required: Aadhaar Card, BPL Certificate, Bank Passbook.",true],
      ["Jan 2026","<strong>MGNREGA Job Card Registration</strong> – Residents seeking employment may register at the Panchayat office. 100 days of guaranteed work provided.",false],
      ["Dec 2025","<strong>Annual Budget 2025–26 Approved</strong> – The Annual Budget has been approved in the Gram Sabha. Copy available at Panchayat office.",false],
      ["Nov 2025","<strong>Swachh Bharat Mission Drive</strong> – Village cleanliness drive scheduled. All households requested to maintain clean surroundings.",false]
    ],
    galTitle:"Photo Gallery",galSub:"Development activities and community initiatives of Pangartati Gram Panchayat",
    memTitle:"Elected Representatives",memSub:"Gram Panchayat Members elected for the term 2021–2026",
    memRoles:["Sarpanch (President)","Up-Sarpanch","Ward Panch","Ward Panch","Ward Panch","Ward Panch","Gram Sachiv","Rozgar Sahayak"],
    memWards:["Pangartati Gram Panchayat","Deputy Head","Ward No. 1","Ward No. 2","Ward No. 3","Ward No. 4","Village Secretary","Employment Assistant"],
    schTitle:"Government Schemes",schSub:"Central and State Government schemes available to Pangartati residents",schApply:"Apply Now",
    sch:[
      {icon:"🏘️",title:"PM Awas Yojana (Gramin)",desc:"Housing for All – Free pucca house for eligible homeless rural families.",key:"pmay"},
      {icon:"⛏️",title:"MGNREGA",desc:"100 days of guaranteed wage employment per household per year.",key:"mgnrega"},
      {icon:"🚰",title:"Jal Jeevan Mission",desc:"Tap water connection to every rural household.",key:"jjm"},
      {icon:"🌾",title:"PM Kisan Samman Nidhi",desc:"₹6,000/year direct income support to eligible farmers.",key:"pmkisan"},
      {icon:"🩺",title:"Ayushman Bharat (PMJAY)",desc:"Health insurance cover of ₹5 lakh per family for BPL households.",key:"pmjay"},
      {icon:"🚽",title:"Swachh Bharat Mission",desc:"Individual Household Latrine construction for open defecation-free status.",key:"sbm"},
      {icon:"⚡",title:"PM Saubhagya Yojana",desc:"Electricity connection to every household including BPL families.",key:"saubhagya"},
      {icon:"🍚",title:"PM Garib Kalyan Ann Yojana",desc:"Free food grains – 5 kg per person per month to eligible beneficiaries.",key:"pmgkay"},
      {icon:"👩","title":"Mahila Samridhi Yojana",desc:"Women empowerment and self-help group (SHG) financial support schemes.",key:"mahila"},
      {icon:"📚",title:"Samagra Shiksha Abhiyan",desc:"Free primary and secondary education support for rural children.",key:"siksha"}
    ],
    abtTitle:"About Pangartati",abtSub:"Overview of Pangartati Gram Panchayat – location, demographics and administration",
    abtRows:["Panchayat Name","Block","District","State","PIN Code","Total Area","Total Population","Number of Wards","Number of Villages","Total Households","GP Code"],
    abtVals:["Pangartati Gram Panchayat","Patur","Akola","Maharashtra","444501","7.09 sq.km","~940 (Census 2011)","9 Wards","3 Villages","~220 Families","530354"],
    bdgTitle:"Budget & Financial Reports",bdgSub:"Transparency in public fund usage",
    bdg:[["📊","Annual Budget 2025–26","Approved budget for financial year 2025-26.","Download PDF →"],["📑","Expenditure Report","Quarterly fund utilization report.","Download PDF →"],["🏗️","Development Works List","Works sanctioned and completed in FY 2025-26.","View Details →"],["📋","Gram Sabha Minutes","Minutes of all Gram Sabha meetings.","View Records →"]],
    rtiTitle:"📜 Right to Information (RTI)",rtiP:"Under the RTI Act 2005, citizens have the right to seek information from this Gram Panchayat.<br>Submit your RTI application to the Gram Sachiv (Public Information Officer).",
    rtiBtn1:"Contact PIO",rtiBtn2:"File RTI Online →",
    conTitle:"Contact Us",conSub:"Get in touch with Pangartati Gram Panchayat office for any queries or services",
    conAddrL:"Office Address",conAddrV:"Pangartati Gram Panchayat Bhawan,<br>Village – Pangartati, Post – Patur,<br>Patur, Akola – 444501, Maharashtra",
    conPhL:"Phone",conPhV:"[+91-XXXXX-XXXXX]",
    conMobL:"Sarpanch Mobile",conMobV:"[+91-XXXXX-XXXXX]",
    conEmL:"Email",conEmV:"pangartati.gp@maharashtra.gov.in",
    conHrL:"Office Hours",conHrV:"Monday to Saturday: 10:00 AM – 5:00 PM<br>Sunday & Government Holidays: Closed",
    qlTitle:"Quick Links",
    ftAboutT:"Pangartati Gram Panchayat",ftAboutP:"Official website of Pangartati Gram Panchayat, Akola, Maharashtra, India. Committed to transparent and accountable governance for the development of our village.",
    ftQL:"Quick Links",ftRes:"Resources",ftHelp:"Help",
    ftLinks:["Home","About Panchayat","Members","Services","Schemes"],
    ftRes2:["Notices","Budget","RTI","e-Gram Swaraj","MGNREGA"],
    ftHelp2:["Contact Us","Disclaimer","Privacy Policy","Site Map","Accessibility"],
    copyright:"© 2026 Pangartati Gram Panchayat. All Rights Reserved.",
    lastUpd:"Last Updated: March 2026",webPol:"Website Policy",
    fL:{
      name:"Applicant Full Name",fname:"Father's / Husband's Name",dob:"Date of Birth",gender:"Gender",
      mobile:"Mobile Number",email:"Email (Optional)",addr:"Full Address",village:"Village",
      ward:"Ward Number",aadhar:"Aadhaar Number",purpose:"Purpose",relation:"Relation to Deceased",
      dod:"Date of Death",deceased:"Deceased's Name",income:"Annual Income",caste:"Caste",
      category:"Category",landArea:"Land Area (Acres)",bankAcc:"Bank Account Number",ifsc:"IFSC Code",
      bankName:"Bank Name",complaint:"Description of Complaint",location:"Complaint Location",
      boothNo:"Booth Number",voterIdNo:"Voter ID Number",reason:"Reason for Correction",
      nocType:"NOC Type",propertyAddr:"Property Address",memberCount:"Family Member Count",
      rationCard:"Ration Card Number",
      genderOpts:["Select","Male","Female","Other"],
      castOpts:["Select","SC","ST","OBC","NT","SBC","General"],
      nocOpts:["Select","Construction NOC","Trade NOC","Transport NOC","Other"],
      wardOpts:["Select","Ward 1","Ward 2","Ward 3","Ward 4","Ward 5","Ward 6","Ward 7","Ward 8","Ward 9"],
      submit:"Submit Application",reset:"Clear Form",
      uploadDocs:"Upload Documents",uploadHint:"Aadhaar Card, Ration Card, Photo etc. (PDF/JPG)",
      successTitle:"Application Submitted Successfully!",
      successMsg:"Your application has been received. The Panchayat office will contact you within 7 working days.",
      refLabel:"Reference Number",
      notice:"📋 Note: This online form is for preliminary registration. You will need to visit the Panchayat office with original documents.",
      reqDoc:"Required Documents",
    }
  }
};

const FORMS = {
  birth:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, रेशन कार्ड</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.fname} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.dob} <span class="req">*</span></label><input type="date" required></div>
    <div class="form-group"><label>${fL.gender}</label><select>${fL.genderOpts.map(o=>`<option>${o}</option>`).join('')}</select></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" required maxlength="10"></div>
    <div class="form-group"><label>${fL.aadhar}</label><input type="text" maxlength="12"></div>
    <div class="form-group"><label>${fL.ward}</label><select>${fL.wardOpts.map(o=>`<option>${o}</option>`).join('')}</select></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  death:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, मृत्यू दाखला</div>
    <div class="form-group"><label>${fL.deceased} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.dod} <span class="req">*</span></label><input type="date" required></div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.relation} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" required maxlength="10"></div>
    <div class="form-group"><label>${fL.aadhar}</label><input type="text" maxlength="12"></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  residence:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, रेशन कार्ड, लाइट बिल</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.fname} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.aadhar} <span class="req">*</span></label><input type="text" maxlength="12" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" required maxlength="10"></div>
    <div class="form-group"><label>${fL.purpose}</label><input type="text"></div>
    <div class="form-group"><label>${fL.ward}</label><select>${fL.wardOpts.map(o=>`<option>${o}</option>`).join('')}</select></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  income:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, शेत 7/12 उतारा</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.fname} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.income} (₹) <span class="req">*</span></label><input type="number" required></div>
    <div class="form-group"><label>${fL.category}</label><select>${fL.castOpts.map(o=>`<option>${o}</option>`).join('')}</select></div>
    <div class="form-group"><label>${fL.aadhar} <span class="req">*</span></label><input type="text" maxlength="12" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" required maxlength="10"></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  water:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" required maxlength="10"></div>
    <div class="form-group"><label>${fL.ward}</label><select>${fL.wardOpts.map(o=>`<option>${o}</option>`).join('')}</select></div>
    <div class="form-group"><label>${fL.location} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group full"><label>${fL.complaint} <span class="req">*</span></label><textarea required></textarea></div>`,
  road:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" required maxlength="10"></div>
    <div class="form-group"><label>${fL.ward}</label><select>${fL.wardOpts.map(o=>`<option>${o}</option>`).join('')}</select></div>
    <div class="form-group"><label>${fL.location} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group full"><label>${fL.complaint} <span class="req">*</span></label><textarea required></textarea></div>`,
  voter:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, जन्म दाखला, फोटो</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.dob} <span class="req">*</span></label><input type="date" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" required maxlength="10"></div>
    <div class="form-group"><label>${fL.voterIdNo}</label><input type="text"></div>
    <div class="form-group"><label>${fL.reason}</label><input type="text"></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  noc:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, मालमत्ता कागदपत्रे</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" required maxlength="10"></div>
    <div class="form-group"><label>${fL.nocType} <span class="req">*</span></label><select required>${fL.nocOpts.map(o=>`<option>${o}</option>`).join('')}</select></div>
    <div class="form-group"><label>${fL.aadhar}</label><input type="text" maxlength="12"></div>
    <div class="form-group full"><label>${fL.propertyAddr} <span class="req">*</span></label><textarea required></textarea></div>`,
  pmay:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, BPL प्रमाणपत्र, बँक पासबुक</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.aadhar} <span class="req">*</span></label><input type="text" maxlength="12" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" maxlength="10" required></div>
    <div class="form-group"><label>${fL.income} (₹)</label><input type="number"></div>
    <div class="form-group"><label>${fL.bankAcc} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.ifsc}</label><input type="text"></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  mgnrega:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, रेशन कार्ड, बँक पासबुक</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.aadhar} <span class="req">*</span></label><input type="text" maxlength="12" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" maxlength="10" required></div>
    <div class="form-group"><label>${fL.bankAcc}</label><input type="text"></div>
    <div class="form-group"><label>${fL.memberCount}</label><input type="number" min="1"></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  pmkisan:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, 7/12 उतारा, बँक पासबुक</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.aadhar} <span class="req">*</span></label><input type="text" maxlength="12" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" maxlength="10" required></div>
    <div class="form-group"><label>${fL.landArea}</label><input type="text"></div>
    <div class="form-group"><label>${fL.bankAcc} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.ifsc}</label><input type="text"></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  jjm:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, रेशन कार्ड</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.aadhar} <span class="req">*</span></label><input type="text" maxlength="12" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" maxlength="10" required></div>
    <div class="form-group"><label>${fL.ward}</label><select>${fL.wardOpts.map(o=>`<option>${o}</option>`).join('')}</select></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  pmjay:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, रेशन कार्ड, BPL प्रमाणपत्र</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.aadhar} <span class="req">*</span></label><input type="text" maxlength="12" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" maxlength="10" required></div>
    <div class="form-group"><label>${fL.rationCard}</label><input type="text"></div>
    <div class="form-group"><label>${fL.memberCount}</label><input type="number" min="1"></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  sbm:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, BPL कार्ड</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.aadhar} <span class="req">*</span></label><input type="text" maxlength="12" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" maxlength="10" required></div>
    <div class="form-group"><label>${fL.bankAcc}</label><input type="text"></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  saubhagya:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, BPL प्रमाणपत्र</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.aadhar} <span class="req">*</span></label><input type="text" maxlength="12" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" maxlength="10" required></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  pmgkay:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, रेशन कार्ड</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.aadhar} <span class="req">*</span></label><input type="text" maxlength="12" required></div>
    <div class="form-group"><label>${fL.rationCard} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" maxlength="10" required></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  mahila:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, फोटो, बँक पासबुक</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.aadhar} <span class="req">*</span></label><input type="text" maxlength="12" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" maxlength="10" required></div>
    <div class="form-group"><label>${fL.income} (₹)</label><input type="number"></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
  siksha:(fL)=>`<div class="form-section-head">${fL.reqDoc}: आधार, जन्म दाखला</div>
    <div class="form-group"><label>${fL.name} <span class="req">*</span> (विद्यार्थी)</label><input type="text" required></div>
    <div class="form-group"><label>${fL.fname} <span class="req">*</span></label><input type="text" required></div>
    <div class="form-group"><label>${fL.dob} <span class="req">*</span></label><input type="date" required></div>
    <div class="form-group"><label>${fL.mobile} <span class="req">*</span></label><input type="tel" maxlength="10" required></div>
    <div class="form-group"><label>${fL.category}</label><select>${fL.castOpts.map(o=>`<option>${o}</option>`).join('')}</select></div>
    <div class="form-group full"><label>${fL.addr} <span class="req">*</span></label><textarea required></textarea></div>`,
};

const SVC_FORM_MAP = ['birth','death','residence','income','water','road','voter','noc'];
let currentLang = 'mr';
function getLang(){ return T[currentLang]; }