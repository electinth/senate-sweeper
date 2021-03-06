const senate_names = [
  'พล.ท. กนิษฐ์ ชาญปรีชา',
  'นาย กรรณภว์ ธนภรรคภวิน',
  'พล.ต. กลชัย สุวรรณบุรณ์',
  'นาย กล้านรงค์ จันทิก',
  'นาย กษิดิศ อาชวคุณ',
  'นาง กอบกุล อาภากร ณ อยุธยา',
  'นาง กาญจนารัตน์ ลีวิโรจน์',
  'นาย กำพล เลิศเกียรติดำรงค์',
  'นาย กิตติ วะสีนนท์',
  'นาย กิตติศักดิ์ รัตนวราหะ',
  'นาย กูรดิสถ์ จันทร์ศรีชวาลา',
  'นาย เกียวแก้ว สุทอ',
  'นาย ไกรสิทธิ์ ตันติศิรินทร์',
  'นาย ขวัญชาติ วงศ์ศุภรานันต์',
  'นาย คำนูณ สิทธิสมาน',
  'นาย จเด็จ อินสว่าง',
  'นาย จรินทร์ จักกะพาก',
  'พล.ท. จเรศักดิ์ อานุภาพ',
  'พล.ต.อ. จักรทิพย์ ชัยจินดา',
  'พล.ต.ท. จิตติ รอดบางยาง',
  'นาง จินตนา ชัยยวรรณาการ',
  'นาย จิรชัย มูลทองโร่ย',
  'นาง จิรดา สงฆ์ประชา',
  'พล.อ. จิรพงศ์ วรรณรัตน์',
  'พล.อ. จีระศักดิ์ ชมประสพ',
  'นพ. เจตน์ ศิรธรานนท์',
  'นาย เจน นำชัยศิริ',
  'นาง ฉวีรัตน์ เกษตรสุนทร',
  'พล.อ. ฉัตรเฉลิม เฉลิมสุข',
  'พล.อ. ฉัตรชัย สาริกัลยะ',
  'นาย เฉลา พวงมาลัย',
  'พล.อ.อ. เฉลิมชัย เครืองาม',
  'นพ. เฉลิมชัย บุญยะลีพรรณ',
  'นาย เฉลิมชัย เฟื่องคอน',
  'นาย เฉลียว เกาะแก้ว',
  'นาย ชยุต สืบตระกูล',
  'พล.อ. ชยุติ สุวรรณมาศ',
  'นาย ชลิต แก้วจินดา',
  'พล.ต.อ. ชัชวาลย์ สุขสมจิตร์',
  'พล.อ.อ. ชัยพฤกษ์ ดิษยะศริน',
  'พล.ร.อ. ชัยวัฒน์ เอี่ยมสมุทร',
  'นาย ชาญวิทย์ ผลชีวิน',
  'พล.อ. ชาตอุดม ติตถะสิริ',
  'พล.ร.อ. ชุมนุม อาจวงษ์',
  'พล.อ. ชูศักดิ์ เมฆสุวรรณ์',
  'พล.อ. เชวงศักดิ์ ทองสลวย',
  'นาย เชิดศักดิ์ จำปาเทศ',
  'นาย เชิดศักดิ์ สันติวรวุฒิ',
  'นาย ซากีย์ พิทักษ์คุมพล',
  'พล.ร.อ. ฐนิธ กิตติอำพน',
  'พล.ร.อ. ณรงค์ พิพัฒนาศัย',
  'นาย ณรงค์ รัตนานุกูล',
  'นพ. ณรงค์ สหเมธาพัฒน์',
  'นาย ณรงค์ อ่อนสอาด',
  'พล.อ. ณัฐ อินทรเจริญ',
  'พล.อ. ดนัย มีชูเวท',
  'นาง ดวงพร รอดพยาธิ์',
  'นางสาว ดาวน้อย สุทธินิภาพันธ์',
  'นาย ดิเรกฤทธิ์ เจนครองธรรม',
  'นาย ดุสิต เขมะศักดิ์ชัย',
  'พล.ต.ท. เดชณรงค์ สุทธิชาญบัญชา',
  'พล.ต.ท. ตรีทศ รณฤทธิวิชัย',
  'พล.อ.อ. ตรีทศ สนแจ้ง',
  'นาย ตวง อันทะไชย',
  'พล.อ. ไตรโรจน์ ครุธเวโช',
  'นาย ถนัด มานะพันธุ์นิยม',
  'นาย ถวิล เปลี่ยนศรี',
  'นาย ถาวร เทพวิมลเพชรกุล',
  'พล.อ.อ. ถาวร มณีพฤกษ์',
  'นาย ทรงเดช เสมอคำ',
  'พล.อ. ทวีป เนตรนิยม',
  'นาย ทวีวงษ์ จุลกมนตรี',
  'นาง ทัศนา ยุวานนท์',
  'ร.อ. ทินพันธุ์ นาคะตะ',
  'พล.อ. เทพพงศ์ ทิพยจันทร์',
  'พล.อ. ธงชัย สาระสุข',
  'พล.อ. ธนะศักดิ์ ปฏิมาประกร',
  'พล.อ. ธวัชชัย สมุทรสาคร',
  'นาย ธานี สุโชดายน',
  'นาย ธานี อ่อนละเอียด',
  'พล.อ. ธีรเดช มีเพียร',
  'นพ. ธีระเกียรติ เจริญเศรษฐศิลป์',
  'พล.ร.อ. นพดล โชคระดา',
  'พล.อ. นพดล อินทปัญญา',
  'พล.อ. นาวิน ดำริกาญจน์',
  'นาย นิพนธ์ นาคสมภพ',
  'พล.อ. นิวัตร มีนะโยธิน',
  'นาย นิสดารก์ เวชยานนท์',
  'นาย นิอาแซ ซีอุเซ็ง',
  'นาย เนาวรัตน์ พงษ์ไพบูลย์',
  'นาย บรรชา พงศ์อายุกูล',
  'พล.อ. บุญธรรม โอริส',
  'นาย บุญมี สุระโคตร',
  'นาย บุญส่ง ไข่เกษ',
  'พล.อ. บุญสร้าง เนียมประดิษฐ์',
  'นาง เบญจรัตน์ จริยธาราสิทธิ์',
  'ม.ล. ปนัดดา ดิศกุล',
  'พล.อ.อ. ประจิน จั่นตอง',
  'นาย ประดิษฐ์ เหลืองอร่าม',
  'นาง ประภาศรี สุฉันทบุตร',
  'นาย ประมนต์ สุธีวงศ์',
  'นาย ประมาณ สว่างญาติ',
  'ร.อ. ประยุทธ เสาวคนธ์',
  'นาง ประยูร เหล่าสายเชื้อ',
  'พล.ร.อ. ประสาน สุขเกษตร',
  'นาย ประเสริฐ ปิ่นปฐมรัฐ',
  'พล.ต.ต. ปรัชญ์ชัย ใจชาญสุขกิจ',
  'พล.อ. ปรีชา จันทร์โอชา',
  'นาย ปรีชา บัววิรัตน์เลิศ',
  'นาย ปัญญา งานเลิศ',
  'พล.อ. ปัฐมพงศ์ ประถมภัฏ',
  'นาย ปานเทพ กล้าณรงค์ราญ',
  'นาง ปิยฉัฏฐ์ วันเฉลิม',
  'นาย ปิยพันธุ์ นิมมานเหมินท์',
  'พล.อ. โปฏก บุนนาค',
  'นาง ผาณิต นิติทัณฑ์ประภาศ',
  'คุณหญิง พรทิพย์ โรจนสุนันท์',
  'พล.อ. พรพิพัฒน์ เบญญศรี',
  'นาย พรเพชร วิชิตชลชัย',
  'นพ. พลเดช ปิ่นประทีป',
  'พล.ร.อ. พะจุณณ์ ตามประทีป',
  'พล.ร.อ. พัลลภต มิศานนท์',
  'นาง พิกุลแก้ว ไกรฤกษ์',
  'นาย พิทักษ์ ไชยเจริญ',
  'พล.ท. พิศณุ พุทธวงศ์',
  'นาย พิศาล มาณวพัฒน์',
  'พล.ต.ท. พิสัณห์ จุลดิลก',
  'พล.อ. พิสิทธิ์ สิทธิสาร',
  'นาย พีระศักดิ์ พอจิต',
  'นาง เพ็ญพักตร์ ศรีทอง',
  'พล.อ. ไพชยนต์ ค้าทันเจริญ',
  'นาย ไพฑูรย์ หลิมวัฒนา',
  'นาย ไพโรจน์ พ่วงทอง',
  'พล.อ. ไพโรจน์ พานิชสมัย',
  'นาง ภัทรา วรามิตร',
  'นาย ภาณุ อุทัยรัตน์',
  'นาย มณเฑียร บุญตัน',
  'พล.อ.อ. มนัส รูปขจร',
  'นาย มหรรณพ เดชวิทักษ์',
  'พล.อ. มารุต ปัชโชตะสิงห์',
  'พ.ต.ต. ยงยุทธ สาระสมบัติ',
  'พล.อ. ยอดยุทธ บุญญาธิการ',
  'พ.ต.อ. ยุทธกร วงเวียน',
  'นาย ยุทธนา ทัพเจริญ',
  'นาย รณวริทธิ์ ปริยฉัตรตระกูล',
  'นาย ระวี รุ่งเรือง',
  'นางสาว เรณู ตังคจิวางกูร',
  'นาย ลักษณ์ วจนานวัช',
  'พล.ร.อ. ลือชัย รุดดิษฐ์',
  'พล.อ. เลิศรัตน์ รัตนวานิช',
  'พล.อ. เลิศฤทธิ์ เวชสวรรค์',
  'นาย วงศ์สยาม เพ็งพานิชภักดี',
  'พล.อ. วรพงษ์ สง่าเนตร',
  'นาง วรารัตน์ อติแพทย์',
  'พล.ท. วราห์ บุญญะสิทธิ์',
  'พล.อ. วลิต โรจนภักดี',
  'พล.อ. วสันต์ สุริยมงคล',
  'พล.อ. วัฒนา สรรพานิช',
  'นาย วันชัย สอนศิริ',
  'นาย วัลลภ ตังคณานุรักษ์',
  'พล.อ. วิชิต ยาทิพย์',
  'นาย วิทยา ผิวผ่อง',
  'พล.อ. วินัย สร้างสุขดี',
  'พล.ต.ท. วิบูลย์ บางท่าไม้',
  'นางสาว วิบูลย์ลักษณ์ ร่วมรักษ์',
  'นาย วิรัตน์ เกสสมบูรณ์',
  'นางสาว วิไลลักษณ์ อรินทมะพงษ์',
  'นาย วิวรรธน์ แสงสุริยะฉัตร',
  'นาย วิสุทธิ์ ศรีสุพรรณ',
  'นาย วีระศักดิ์ โควสุรัตน์',
  'นาย วีระศักดิ์ ฟูตระกูล',
  'นาย วีระศักดิ์ ภูครองหิน',
  'พล.อ. วีรัณ ฉันทศาสตร์โกศล',
  'นาย วุฒิพันธุ์ วิชัยรัตน์',
  'นาย ศรีศักดิ์ วัฒนพรมงคล',
  'นาย ศักดิ์ชัย ธนบุญชัย',
  'นาย ศักดิ์ไทย สุรกิจบวร',
  'พล.ร.อ. ศักดิ์สิทธิ์ เชิดบุญเมือง',
  'พล.ต.ท. ศานิตย์ มหถาวร',
  'นาง ศิรินา ปวโรฬารวิทยา',
  'พล.ร.อ. ศิษฐวัชร วงษ์สุวรรณ',
  'นาย ศุภชัย สมเจริญ',
  'พล.อ. ศุภรัตน์ พัฒนาวิสุทธิ์',
  'พล.อ. สกนธ์ สัจจานิตย์',
  'พล.อ. สกล ชื่นตระกูล',
  'นาย สกุล มาลากุล',
  'นาย สถิตย์ ลิ่มพงศ์พันธุ์',
  'พล.ร.ท. สนธยา น้อยฉายา',
  'พล.อ. สนธยา ศรีเจริญ',
  'พล.อ. สนั่น มะเริงสิทธิ์',
  'นาย สม จาตุศรีพิทักษ์',
  'พล.อ. สมเจตน์ บุญถนอม',
  'นาย สมชาย ชาญณรงค์กุล',
  'นาย สมชาย เสียงหลาย',
  'นาย สมชาย แสวงการ',
  'นาย สมชาย หาญหิรัญ',
  'นาย สมเดช นิลพันธุ์',
  'พล.ต.ท. สมบัติ มิลินทจินดา',
  'นาย สมบูรณ์ งามลักษณ์',
  'นาย สมพล เกียรติไพบูลย์',
  'นาย สมศักดิ์ โชติรัตนะศิริ',
  'พล.ต.ท. สมหมาย กองวิสัยสุข',
  'พล.อ. สมหมาย เกาฏีระ',
  'พล.อ. สราวุฒิ ชลออยู่',
  'นาย สวัสดิ์ สมัครพงศ์',
  'พล.อ. สสิน ทองภักดี',
  'นาย สังศิต พิริยะรังสรรค์',
  'นาย สัญชัย จุลมนต์',
  'นาย สาธิต เหล่าสุวรรณ',
  'นาย สำราญ ครรชิต',
  'พล.อ. สำเริง ศิวาดำรงค์',
  'พล.อ. สิงห์ศึก สิงห์ไพร',
  'พล.อ.อ. สุจินต์ แช่มช้อย',
  'นาย สุชัย บุตรสาระ',
  'นาย สุธี มากบุญ',
  'นาง สุนี จึงวิโรจน์',
  'นาย สุรชัย ดนัยตั้งตระกูล',
  'นาย สุรชัย เลี้ยงบุญเลิศชัย',
  'พล.อ. สุรเชษฐ์ ชัยวงศ์',
  'นาย สุรเดช จิรัฐิติเจริญ',
  'พล.อ. สุรพงษ์ สุวรรณอัตถ์',
  'พล.อ. สุรศักดิ์ กาญจนรัตน์',
  'นาย สุรสิทธิ์ ตรีทอง',
  'นาย สุวพันธุ์ ตันยุวรรธนะ',
  'นาย สุวรรณ เลิศปัญญาโรจน์',
  'นาง สุวรรณี สิริเวชชะพันธ์',
  'นาย เสรี สุวรรณภานนท์',
  'พล.อ. อกนิษฐ์ หมื่นสวัสดิ์',
  'พล.อ.อ. อดิศักดิ์ กลั่นเสนาะ',
  'พล.ต.อ. อดุลย์ แสงสิงแก้ว',
  'พล.อ. อนันตพร กาญจนรัตน์',
  'นาย อนุมัติ อาหมัด',
  'นาย อนุศักดิ์ คงมาลัย',
  'นาย อนุศาสน์ สุวรรณมงคล',
  'นาง อภิรดี ตันตราภรณ์',
  'พล.ท. อภิรัชต์ คงสมพงษ์',
  'นาย อมร นิลเปรม',
  'นาย ออน กาจกระโทก',
  'พล.อ. อักษรา เกิดผล',
  'นาย อับดุลฮาลิม มินซาร์',
  'พล.อ. อาชาไนย ศรีสุข',
  'พล.ท. อำพน ชูประทุม',
  'นพ. อำพล จินดาวัฒนะ',
  'พล.ร.อ. อิทธิคมน์ ภมรสูต',
  'นพ. อุดม คชินทร',
  'นาย อุดม วรัญญูรัฐ',
  'พล.อ. อุดมชัย ธรรมสาโรรัชต์',
  'นาย อุปกิต ปาจรียางกูร',
  'พล.อ. อู๊ด เบื้องบน',
  'พล.ต. โอสถ ภาวิไล'
];
  
const levels = [ // NOTE ID starts from 1 not zero-based index
  {
    name: 'คสช. เก่า',
    yes: [
      19,
      29,
      30,
      40,
      43,
      51,
      55,
      63,
      69,
      75,
      77,
      84,
      98,
      118,
      149,
      219,
      221,
      230,
      236,
      239
    ],
    no: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      41,
      42,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      52,
      53,
      54,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      64,
      65,
      66,
      67,
      68,
      70,
      71,
      72,
      73,
      74,
      76,
      78,
      79,
      80,
      81,
      82,
      83,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      220,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      231,
      232,
      233,
      234,
      235,
      237,
      238,
      240,
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250
    ]
  },
  {
    name: 'สนช. เก่า',
    yes: [
      1,
      2,
      3,
      4,
      7,
      9,
      10,
      18,
      19,
      24,
      25,
      26,
      27,
      29,
      33,
      37,
      39,
      40,
      41,
      43,
      44,
      55,
      56,
      63,
      64,
      69,
      71,
      75,
      78,
      80,
      81,
      83,
      84,
      88,
      95,
      108,
      109,
      115,
      119,
      122,
      125,
      129,
      131,
      134,
      136,
      137,
      139,
      140,
      142,
      144,
      149,
      151,
      153,
      156,
      160,
      162,
      163,
      164,
      171,
      173,
      176,
      178,
      179,
      181,
      183,
      184,
      185,
      188,
      191,
      192,
      195,
      199,
      200,
      201,
      212,
      218,
      219,
      221,
      226,
      228,
      229,
      231,
      232,
      234,
      236,
      239,
      242,
      247,
      249
    ],
    no: [
      5,
      6,
      8,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      20,
      21,
      22,
      23,
      28,
      30,
      31,
      32,
      34,
      35,
      36,
      38,
      42,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      57,
      58,
      59,
      60,
      61,
      62,
      65,
      66,
      67,
      68,
      70,
      72,
      73,
      74,
      76,
      77,
      79,
      82,
      85,
      86,
      87,
      89,
      90,
      91,
      92,
      93,
      94,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      110,
      111,
      112,
      113,
      114,
      116,
      117,
      118,
      120,
      121,
      123,
      124,
      126,
      127,
      128,
      130,
      132,
      133,
      135,
      138,
      141,
      143,
      145,
      146,
      147,
      148,
      150,
      152,
      154,
      155,
      157,
      158,
      159,
      161,
      165,
      166,
      167,
      168,
      169,
      170,
      172,
      174,
      175,
      177,
      180,
      182,
      186,
      187,
      189,
      190,
      193,
      194,
      196,
      197,
      198,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      213,
      214,
      215,
      216,
      217,
      220,
      222,
      223,
      224,
      225,
      227,
      230,
      233,
      235,
      237,
      238,
      240,
      241,
      243,
      244,
      245,
      246,
      248,
      250
    ]
  },
  {
    name: 'เลือกประยุทธ์เป็นนายกฯ',
    yes: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      235,
      236,
      237,
      238,
      239,
      240,
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250
    ],
    no: [
      119
    ]
  }
];