// Indian states
export const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// State coordinates for map centering
export const stateCoordinates: {[key: string]: [number, number]} = {
  "Andhra Pradesh": [15.9129, 79.7400],
  "Arunachal Pradesh": [28.2180, 94.7278],
  "Assam": [26.2006, 92.9376],
  "Bihar": [25.0961, 85.3131],
  "Chhattisgarh": [21.2787, 81.8661],
  "Goa": [15.2993, 74.1240],
  "Gujarat": [22.2587, 71.1924],
  "Haryana": [29.0588, 76.0856],
  "Himachal Pradesh": [31.1048, 77.1734],
  "Jharkhand": [23.6102, 85.2799],
  "Karnataka": [15.3173, 75.7139],
  "Kerala": [10.8505, 76.2711],
  "Madhya Pradesh": [22.9734, 78.6569],
  "Maharashtra": [19.7515, 75.7139],
  "Manipur": [24.6637, 93.9063],
  "Meghalaya": [25.4670, 91.3662],
  "Mizoram": [23.1645, 92.9376],
  "Nagaland": [26.1584, 94.5624],
  "Odisha": [20.9517, 85.0985],
  "Punjab": [31.1471, 75.3412],
  "Rajasthan": [27.0238, 74.2179],
  "Sikkim": [27.5330, 88.5122],
  "Tamil Nadu": [11.1271, 78.6569],
  "Telangana": [18.1124, 79.0193],
  "Tripura": [23.9408, 91.9882],
  "Uttar Pradesh": [26.8467, 80.9462],
  "Uttarakhand": [30.0668, 79.0193],
  "West Bengal": [22.9868, 87.8550]
};

// Sample default coordinates for districts, organized by state
export const districtCoordinates: {[key: string]: {[key: string]: [number, number]}} = {
  "Andhra Pradesh": {
    "Visakhapatnam": [17.6868, 83.2185],
    "Vijayawada": [16.5062, 80.6480],
    "Tirupati": [13.6288, 79.4192],
    "Guntur": [16.3067, 80.4365],
    "Nellore": [14.4426, 79.9865],
    "Kurnool": [15.8281, 78.0373],
    "Kakinada": [16.9891, 82.2475],
    "Anantapur": [14.6819, 77.6006],
    "Kadapa": [14.4753, 78.8298],
    "Eluru": [16.7050, 81.1007],
    "Ongole": [15.5036, 80.0445]
  },
  "Arunachal Pradesh": {
    "Itanagar": [27.0844, 93.6053],
    "Naharlagun": [27.1047, 93.6952],
    "Pasighat": [28.0667, 95.3333],
    "Tawang": [27.5883, 91.8650],
    "Bomdila": [27.2648, 92.4247],
    "Ziro": [27.5941, 93.8285],
    "Tezu": [27.9126, 96.1288],
    "Roing": [28.1500, 95.8333],
    "Yingkiong": [28.6000, 95.0333],
    "Aalo": [28.1700, 94.8000]
  },
  "Assam": {
    "Guwahati": [26.1445, 91.7362],
    "Silchar": [24.8333, 92.8000],
    "Dibrugarh": [27.4728, 94.9120],
    "Jorhat": [26.7500, 94.2167],
    "Tezpur": [26.6333, 92.8000],
    "Nagaon": [26.3500, 92.6833],
    "Bongaigaon": [26.4667, 90.5667],
    "Tinsukia": [27.5000, 95.3667],
    "Goalpara": [26.1667, 90.6167],
    "Karimganj": [24.8667, 92.3500],
    "Dhubri": [26.0333, 89.9667]
  },
  "Bihar": {
    "Patna": [25.5941, 85.1376],
    "Gaya": [24.7957, 85.0000],
    "Muzaffarpur": [26.1209, 85.3647],
    "Bhagalpur": [25.2445, 87.0108],
    "Darbhanga": [26.1667, 85.9000],
    "Arrah": [25.5667, 84.6667],
    "Begusarai": [25.4167, 86.1333],
    "Chhapra": [25.7833, 84.7333],
    "Katihar": [25.5333, 87.5833],
    "Purnia": [25.7833, 87.4667],
    "Samastipur": [25.8500, 85.7833]
  },
  "Chhattisgarh": {
    "Raipur": [21.2514, 81.6296],
    "Bilaspur": [22.0833, 82.1500],
    "Bhilai": [21.2167, 81.4333],
    "Korba": [22.3500, 82.6833],
    "Durg": [21.1833, 81.2833],
    "Rajnandgaon": [21.1000, 81.0333],
    "Raigarh": [21.9000, 83.4000],
    "Jagdalpur": [19.0667, 82.0333],
    "Ambikapur": [23.1167, 83.2000],
    "Dhamtari": [20.7000, 81.5500]
  },
  "Goa": {
    "Panaji": [15.4909, 73.8278],
    "Margao": [15.3000, 73.9500],
    "Vasco da Gama": [15.3833, 73.8167],
    "Mapusa": [15.6000, 73.8167],
    "Ponda": [15.4000, 74.0167],
    "Curchorem": [15.2500, 74.1000],
    "Canacona": [15.0167, 74.0167],
    "Bicholim": [15.6000, 73.9500],
    "Pernem": [15.7167, 73.8000],
    "Quepem": [15.2167, 74.0667]
  },
  "Gujarat": {
    "Ahmedabad": [23.0225, 72.5714],
    "Surat": [21.1702, 72.8311],
    "Vadodara": [22.3072, 73.1812],
    "Rajkot": [22.3000, 70.7833],
    "Bhavnagar": [21.7645, 72.1519],
    "Jamnagar": [22.4707, 70.0577],
    "Gandhinagar": [23.2156, 72.6369],
    "Junagadh": [21.5167, 70.4667],
    "Anand": [22.5667, 72.9333],
    "Bharuch": [21.7000, 72.9667],
    "Patan": [23.8500, 72.1167]
  },
  "Haryana": {
    "Faridabad": [28.4089, 77.3178],
    "Gurgaon": [28.4595, 77.0266],
    "Panipat": [29.3909, 76.9635],
    "Ambala": [30.3786, 76.7767],
    "Hisar": [29.1667, 75.7167],
    "Karnal": [29.6833, 76.9833],
    "Rohtak": [28.9000, 76.5667],
    "Sonipat": [28.9833, 77.0167],
    "Yamunanagar": [30.1000, 77.2833],
    "Panchkula": [30.6911, 76.8536]
  },
  "Himachal Pradesh": {
    "Shimla": [31.1048, 77.1734],
    "Mandi": [31.7083, 76.9314],
    "Dharamshala": [32.2200, 76.3200],
    "Solan": [30.9167, 77.1167],
    "Kullu": [31.9667, 77.1000],
    "Hamirpur": [31.6833, 76.5167],
    "Nahan": [30.5500, 77.3000],
    "Chamba": [32.5667, 76.1333],
    "Bilaspur": [31.3333, 76.7500],
    "Una": [31.4667, 76.2833]
  },
  "Jharkhand": {
    "Ranchi": [23.3441, 85.3096],
    "Jamshedpur": [22.8000, 86.1833],
    "Dhanbad": [23.8000, 86.4500],
    "Bokaro": [23.7833, 85.9667],
    "Hazaribagh": [23.9833, 85.3500],
    "Deoghar": [24.4833, 86.7000],
    "Giridih": [24.1833, 86.3000],
    "Ramgarh": [23.6333, 85.5167],
    "Phusro": [23.7833, 85.9833],
    "Medininagar": [24.0500, 84.0667]
  },
  "Karnataka": {
    "Bengaluru": [12.9716, 77.5946],
    "Mysuru": [12.2958, 76.6394],
    "Mangaluru": [12.9141, 74.8560],
    "Belagavi": [15.8667, 74.5000],
    "Kalaburagi": [17.3333, 76.8333],
    "Hubballi": [15.3600, 75.1250],
    "Shivamogga": [13.9304, 75.5600],
    "Tumakuru": [13.3406, 77.1022],
    "Davanagere": [14.4667, 75.9167],
    "Ballari": [15.1500, 76.9333],
    "Vijayapura": [16.8244, 75.7154]
  },
  "Kerala": {
    "Kozhikode": [11.2588, 75.7804],
    "Malappuram": [11.0500, 76.0833],
    "Kannur": [11.8745, 75.3704],
    "Wayanad": [11.6850, 76.1320],
    "Thrissur": [10.5276, 76.2144],
    "Palakkad": [10.7867, 76.6548],
    "Ernakulam": [9.9816, 76.2999],
    "Idukki": [9.8500, 76.9667],
    "Thiruvananthapuram": [8.5241, 76.9366],
    "Kollam": [8.8932, 76.6141],
    "Kottayam": [9.5916, 76.5222]
  },
  "Madhya Pradesh": {
    "Bhopal": [23.2599, 77.4126],
    "Indore": [22.7196, 75.8577],
    "Jabalpur": [23.1815, 79.9864],
    "Gwalior": [26.2183, 78.1828],
    "Ujjain": [23.1828, 75.7772],
    "Sagar": [23.8333, 78.7167],
    "Dewas": [22.9667, 76.0667],
    "Satna": [24.5833, 80.8333],
    "Rewa": [24.5333, 81.3000],
    "Ratlam": [23.3167, 75.0667],
    "Singrauli": [24.2000, 82.6667]
  },
  "Maharashtra": {
    "Mumbai": [19.0760, 72.8777],
    "Pune": [18.5204, 73.8567],
    "Nagpur": [21.1458, 79.0882],
    "Thane": [19.2183, 72.9781],
    "Nashik": [20.0059, 73.7910],
    "Aurangabad": [19.8762, 75.3433],
    "Solapur": [17.6599, 75.9064],
    "Kolhapur": [16.7000, 74.2333],
    "Amravati": [20.9333, 77.7500],
    "Nanded": [19.1500, 77.3333],
    "Sangli": [16.8667, 74.5667]
  },
  "Manipur": {
    "Imphal": [24.8167, 93.9500],
    "Thoubal": [24.6333, 94.0167],
    "Bishnupur": [24.6333, 93.7667],
    "Senapati": [25.2667, 94.0167],
    "Ukhrul": [25.1167, 94.3667],
    "Chandel": [24.3167, 93.9833],
    "Churachandpur": [24.3333, 93.6833],
    "Tamenglong": [25.0167, 93.5000],
    "Jiribam": [24.8000, 93.1167],
    "Kangpokpi": [25.1333, 93.9833]
  },
  "Meghalaya": {
    "Shillong": [25.5744, 91.8789],
    "Tura": [25.5144, 90.2141],
    "Jowai": [25.4333, 92.2000],
    "Nongstoin": [25.5167, 91.2667],
    "Williamnagar": [25.4800, 90.6167],
    "Baghmara": [25.1833, 90.6333],
    "Resubelpara": [25.9000, 90.5833],
    "Khliehriat": [25.3500, 92.3667],
    "Mawkyrwat": [25.2931, 91.5819],
    "Ampati": [25.3833, 89.9333]
  },
  "Mizoram": {
    "Aizawl": [23.7272, 92.7175],
    "Lunglei": [22.8833, 92.7333],
    "Champhai": [23.4667, 93.3167],
    "Kolasib": [24.2333, 92.6833],
    "Serchhip": [23.3000, 92.8500],
    "Siaha": [22.5167, 93.0167],
    "Lawngtlai": [22.5333, 92.9000],
    "Mamit": [23.9333, 92.4833],
    "Khawzawl": [23.6333, 93.0167],
    "Saitual": [23.6500, 92.7667]
  },
  "Nagaland": {
    "Kohima": [25.6667, 94.1167],
    "Dimapur": [25.9000, 93.7333],
    "Mokokchung": [26.3333, 94.5333],
    "Tuensang": [26.2833, 94.8333],
    "Wokha": [26.1000, 94.2667],
    "Zunheboto": [26.0167, 94.5167],
    "Phek": [25.6667, 94.4667],
    "Mon": [26.7500, 95.1000],
    "Peren": [25.5167, 93.7333],
    "Kiphire": [25.9000, 94.7833]
  },
  "Odisha": {
    "Bhubaneswar": [20.2961, 85.8245],
    "Cuttack": [20.4625, 85.8830],
    "Rourkela": [22.2492, 84.8828],
    "Brahmapur": [19.3167, 84.7833],
    "Sambalpur": [21.4667, 83.9667],
    "Puri": [19.8000, 85.8500],
    "Balasore": [21.4942, 86.9337],
    "Bhadrak": [21.0544, 86.5154],
    "Baripada": [21.9333, 86.7333],
    "Jeypore": [18.8500, 82.5833],
    "Jharsuguda": [21.8500, 84.0333]
  },
  "Punjab": {
    "Ludhiana": [30.9000, 75.8500],
    "Amritsar": [31.6340, 74.8723],
    "Jalandhar": [31.3256, 75.5792],
    "Patiala": [30.3267, 76.4003],
    "Bathinda": [30.2078, 74.9389],
    "Hoshiarpur": [31.5322, 75.9172],
    "Mohali": [30.7046, 76.7179],
    "Batala": [31.8186, 75.2028],
    "Pathankot": [32.2667, 75.6500],
    "Moga": [30.8167, 75.1667]
  },
  "Rajasthan": {
    "Jaipur": [26.9124, 75.7873],
    "Jodhpur": [26.2389, 73.0243],
    "Udaipur": [24.5854, 73.7125],
    "Kota": [25.2138, 75.8648],
    "Bikaner": [28.0229, 73.3119],
    "Ajmer": [26.4499, 74.6399],
    "Bharatpur": [27.2156, 77.4900],
    "Sikar": [27.6167, 75.1500],
    "Alwar": [27.5667, 76.6167],
    "Bhilwara": [25.3500, 74.6333]
  },
  "Sikkim": {
    "Gangtok": [27.3389, 88.6065],
    "Namchi": [27.1667, 88.3833],
    "Gyalshing": [27.2833, 88.2667],
    "Mangan": [27.5088, 88.5319],
    "Rangpo": [27.1767, 88.5419],
    "Singtam": [27.2333, 88.5000],
    "Jorethang": [27.1070, 88.3217],
    "Nayabazar": [27.1289, 88.1369],
    "Chungthang": [27.6025, 88.6464],
    "Ravangla": [27.3033, 88.3656]
  },
  "Tamil Nadu": {
    "Chennai": [13.0827, 80.2707],
    "Coimbatore": [11.0168, 76.9558],
    "Madurai": [9.9252, 78.1198],
    "Salem": [11.6643, 78.1460],
    "Tiruchirapalli": [10.7905, 78.7047],
    "Tirunelveli": [8.7139, 77.7567],
    "Erode": [11.3428, 77.7274],
    "Tiruppur": [11.1085, 77.3411],
    "Vellore": [12.9165, 79.1325],
    "Thanjavur": [10.7869, 79.1378],
    "Dindigul": [10.3500, 77.9500]
  },
  "Telangana": {
    "Hyderabad": [17.3850, 78.4867],
    "Warangal": [17.9689, 79.5941],
    "Nizamabad": [18.6700, 78.1000],
    "Karimnagar": [18.4333, 79.1500],
    "Khammam": [17.2500, 80.1500],
    "Ramagundam": [18.8000, 79.4500],
    "Mahbubnagar": [16.7333, 77.9833],
    "Nalgonda": [17.0500, 79.2667],
    "Adilabad": [19.6667, 78.5333],
    "Suryapet": [17.1406, 79.6201],
    "Siddipet": [18.1000, 78.8500]
  },
  "Tripura": {
    "Agartala": [23.8333, 91.2667],
    "Udaipur": [23.5333, 91.4833],
    "Dharmanagar": [24.3667, 92.1667],
    "Kailashahar": [24.3333, 92.0167],
    "Belonia": [23.2500, 91.4500],
    "Khowai": [24.0667, 91.6000],
    "Ambassa": [23.9333, 91.8500],
    "Sonamura": [23.4667, 91.2667],
    "Sabroom": [23.0000, 91.7333],
    "Santirbazar": [23.3333, 91.7000]
  },
  "Uttar Pradesh": {
    "Lucknow": [26.8467, 80.9462],
    "Kanpur": [26.4499, 80.3319],
    "Ghaziabad": [28.6667, 77.4167],
    "Agra": [27.1767, 78.0081],
    "Varanasi": [25.3176, 82.9739],
    "Meerut": [28.9833, 77.7000],
    "Prayagraj": [25.4358, 81.8464],
    "Aligarh": [27.8833, 78.0833],
    "Bareilly": [28.3640, 79.4150],
    "Moradabad": [28.8389, 78.7768],
    "Saharanpur": [29.9640, 77.5461]
  },
  "Uttarakhand": {
    "Dehradun": [30.3165, 78.0322],
    "Haridwar": [29.9457, 78.1642],
    "Roorkee": [29.8667, 77.8833],
    "Haldwani": [29.2167, 79.5167],
    "Rudrapur": [28.9833, 79.4000],
    "Kashipur": [29.2167, 78.9500],
    "Rishikesh": [30.1083, 78.2975],
    "Pithoragarh": [29.5833, 80.2167],
    "Ramnagar": [29.4000, 79.1167],
    "Khatima": [28.9167, 79.9667]
  },
  "West Bengal": {
    "Kolkata": [22.5726, 88.3639],
    "Siliguri": [26.7167, 88.3833],
    "Howrah": [22.5958, 88.2636],
    "Darjeeling": [27.0417, 88.2631],
    "Jalpaiguri": [26.5167, 88.7333],
    "Cooch Behar": [26.3167, 89.4333],
    "Alipurduar": [26.4833, 89.5167],
    "Durgapur": [23.5500, 87.3200],
    "Asansol": [23.6833, 86.9833],
    "Kharagpur": [22.3302, 87.3237],
    "Malda": [25.0167, 88.1333]
  }
};

// District map - organized by state
export const districtsByState: {[key: string]: string[]} = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Tirupati", "Guntur", "Nellore", "Kurnool", "Kakinada", "Anantapur", "Kadapa", "Eluru", "Ongole"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Bomdila", "Ziro", "Tezu", "Roing", "Yingkiong", "Aalo"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Tezpur", "Nagaon", "Bongaigaon", "Tinsukia", "Goalpara", "Karimganj", "Dhubri"],
  "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Arrah", "Begusarai", "Chhapra", "Katihar", "Purnia", "Samastipur"],
  "Chhattisgarh": ["Raipur", "Bilaspur", "Bhilai", "Korba", "Durg", "Rajnandgaon", "Raigarh", "Jagdalpur", "Ambikapur", "Dhamtari"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Curchorem", "Canacona", "Bicholim", "Pernem", "Quepem"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh", "Anand", "Bharuch", "Patan"],
  "Haryana": ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Hisar", "Karnal", "Rohtak", "Sonipat", "Yamunanagar", "Panchkula"],
  "Himachal Pradesh": ["Shimla", "Mandi", "Dharamshala", "Solan", "Kullu", "Hamirpur", "Nahan", "Chamba", "Bilaspur", "Una"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Giridih", "Ramgarh", "Phusro", "Medininagar"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Belagavi", "Kalaburagi", "Hubballi", "Shivamogga", "Tumakuru", "Davanagere", "Ballari", "Vijayapura"],
  "Kerala": ["Kozhikode", "Malappuram", "Kannur", "Wayanad", "Thrissur", "Palakkad", "Ernakulam", "Idukki", "Thiruvananthapuram", "Kollam", "Kottayam"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Rewa", "Ratlam", "Singrauli"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Amravati", "Nanded", "Sangli"],
  "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Senapati", "Ukhrul", "Chandel", "Churachandpur", "Tamenglong", "Jiribam", "Kangpokpi"],
  "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongstoin", "Williamnagar", "Baghmara", "Resubelpara", "Khliehriat", "Mawkyrwat", "Ampati"],
  "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Kolasib", "Serchhip", "Siaha", "Lawngtlai", "Mamit", "Khawzawl", "Saitual"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Phek", "Mon", "Peren", "Kiphire"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada", "Jeypore", "Jharsuguda"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Hoshiarpur", "Mohali", "Batala", "Pathankot", "Moga"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Bharatpur", "Sikar", "Alwar", "Bhilwara"],
  "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Rangpo", "Singtam", "Jorethang", "Nayabazar", "Chungthang", "Ravangla"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirapalli", "Tirunelveli", "Erode", "Tiruppur", "Vellore", "Thanjavur", "Dindigul"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Ramagundam", "Mahbubnagar", "Nalgonda", "Adilabad", "Suryapet", "Siddipet"],
  "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia", "Khowai", "Ambassa", "Sonamura", "Sabroom", "Santirbazar"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Prayagraj", "Aligarh", "Bareilly", "Moradabad", "Saharanpur"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Rishikesh", "Pithoragarh", "Ramnagar", "Khatima"],
  "West Bengal": ["Kolkata", "Siliguri", "Howrah", "Darjeeling", "Jalpaiguri", "Cooch Behar", "Alipurduar", "Durgapur", "Asansol", "Kharagpur", "Malda"]
};