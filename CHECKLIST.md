# 🕉️ Temple Website Update & Maintenance Checklist
**Sri Vinayaka Subramanya Ayyappa Swamy Devasthanam**  
*సావర్కర్ నగర్, నాచారం-X రోడ్, మేడ్చల్-మల్కాజ్గిరి, హైదరాబాద్-076.*

This document lists all configuration items, placeholders, and media assets that can be updated as the Temple Committee finalizes them.

---

## 📌 1. Contact Information & Committee Details
- [ ] **Official Phone / Helpline Number:**
  - *Current Default:* `+91 98490 00000` / `+91 94400 00000`
  - *Where to update:* In `app.js` under the `contact` object and `index.html` contact section.
- [ ] **WhatsApp Number for Donation Intimations:**
  - *Current Default:* WhatsApp chat button opens pre-filled message to `919849000000`.
  - *Where to update:* `app.js` (`templeWhatsAppNumber` constant).
- [ ] **Committee Members & Archakas (Priests):**
  - *Current Default:* Chairman: **Sri C.S. Mallesh (శ్రీ సి.యస్. మల్లేష్)**.
  - *Action:* Add names and roles of Vice Chairman, General Secretary, Treasurer, and Head Priest (*Pradhana Archaka*).

---

## 📌 2. Donation, Banking & UPI Details
- [ ] **Verify Bank Account Details:**
  - *Bank:* Punjab National Bank (పంజాబ్ నేషనల్ బ్యాంక్)
  - *Branch:* Nacharam Branch, Hyderabad
  - *Account Number:* `1582102100001322`
  - *IFSC Code:* `PUNB0158210`
  - *Action:* Confirm whether the bank has enabled a direct UPI VPA handle (e.g. `ayyappanacharam@pnb` or `1582102100001322@pnb`).
- [ ] **Update Custom UPI VPA Handle (Optional):**
  - *Current Default:* Uses the standard PNB account IFSC format and dynamic QR generator.
  - *Where to update:* In `app.js` (`upiConfig.vpa`).
- [ ] **Seva & Annadanam Contribution Amounts:**
  - *Current Defaults:*
    - Nitya Annadanam: ₹1,116
    - Pushpalankaram / Flower Garlands: ₹516
    - Nitya Deeparadhana: ₹251
    - Saswatha Pooja / Permanent Trust Fund: ₹5,116
    - Special Abhishekam: ₹1,008
  - *Action:* Adjust these amounts to match the committee's approved Seva rate card.

---

## 📌 3. Photos & Media Assets
- [ ] **Original Idol (Vigraha) Photos:**
  - *Current State:* Generated divine spiritual artwork for Lord Vinayaka, Lord Subramanya Swamy, and Lord Ayyappa Swamy.
  - *Action:* Replace or supplement these with original high-resolution photographs of the consecrated temple idols in the sanctum.
  - *Where to put files:* Save them in the `/assets/` directory (e.g., `deity_ayyappa.jpg`, `deity_vinayaka.jpg`, `deity_subramanya.jpg`).
- [ ] **Temple Gopuram & Entrance Photos:**
  - Take high-resolution landscape photos of the temple entrance on Savarkar Nagar, Nacharam X Road.
- [ ] **Festival & Event Gallery:**
  - Add photos of annual festivals:
    - *Mandala Kalam & Makaravilakku Mahotsavam* (November - January)
    - *Padi Pooja & Irumudi Kattu*
    - *Vinayaka Chavithi Brahmotsavam*
    - *Subramanya Sashti & Skanda Sashti*

---

## 📌 4. Daily Ritual & Darshan Timings
- [ ] **Confirm Exact Temple Timings:**
  - *Current Defaults (from Google Maps & Agama traditions):*
    - Morning: 6:00 AM – 11:30 AM
    - Evening: 5:30 PM – 8:30 PM
  - *Action:* Verify if the temple remains open continuously on auspicious days or Sundays/Saturdays, especially during the Ayyappa Deeksha season (Karthika/Margashira months).

---

## 📌 5. Domain & Free Hosting Launch
- [ ] **Domain Name Purchase:**
  - Buy an official domain (e.g. `ayyappaswamynacharam.org`, `nacharamayyappatemple.in`, or `.com`).
  - *Recommended free/at-cost registrar:* Cloudflare Registrar or Porkbun (approx. ₹700–₹1,000/year, zero extra markup).
- [ ] **Deploy Free to Vercel / Cloudflare Pages / GitHub Pages:**
  - Follow the instructions in [`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md).
  - Setup takes less than 3 minutes, includes 100% free lifetime hosting, free SSL, and zero maintenance fees.
