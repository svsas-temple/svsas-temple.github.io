# 🪔 Temple Committee Guide: Google Forms & Sheets Live CMS
### Sri Vinayaka Subramanya Ayyappa Swamy Devasthanam, Nacharam

This guide explains how temple trustees and committee members can **add, update, or remove events, festivals, and announcements on the live website without touching code, servers, or GitHub**.

---

## 🌟 How It Works (100% Free Forever)

```
[ Committee Member ] 
         │
         ▼ (Simple entry from Phone or PC)
┌─────────────────────────────────┐
│   Google Form / Google Sheet    │
└─────────────────────────────────┘
         │
         ▼ (Instant, automated client-side sync)
┌─────────────────────────────────┐
│  https://svsas-temple.github.io │
│     (Upcoming Events Section)   │
└─────────────────────────────────┘
```

- **Zero Cost**: No database subscriptions, no monthly fees, no maintenance overhead.
- **Works on Mobile**: Any authorized committee member can add announcements right from their smartphone.
- **Fail-Safe Built In**: If the sheet is empty or the network is unreachable, the website automatically falls back to the built-in traditional temple calendar so the page is never blank.

---

## 📋 Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a **Blank spreadsheet**.
2. Name the sheet: **`SVSAS Temple Events`**.
3. In the first tab (rename the tab to **`Events`**), create the following **9 columns** in Row 1:

| Col | Column Header | Description | Example Value |
|:---:|:---|:---|:---|
| **A** | `Title_EN` | Event title in English | `Maha Shivaratri Celebrations` |
| **B** | `Title_TE` | ఈవెంట్ పేరు (తెలుగులో) | `మహా శివరాత్రి విశేష మహోత్సవాలు` |
| **C** | `Date` | తేదీ / తిథి | `Maha Vadya Chaturdashi` |
| **D** | `Time` | సమయం | `4:00 AM – 11:00 PM` |
| **E** | `Category` | దేవుని విభాగం (`ayyappa`, `vinayaka`, `subramanya`) | `ayyappa` |
| **F** | `Desc_EN` | Detailed description in English | `Vishesha Bilvarchana and 4-kala Rudrabhishekam.` |
| **G** | `Desc_TE` | ఉత్సవ విశేష వివరణ | `నాలుగు కాలాల రుద్రాభిషేకం మరియు రాత్రంతా భజనలు.` |
| **H** | `Special_Note` | ప్రత్యేక పూజ లేదా గమనిక | `Devotees can sponsor Bilva archana.` |
| **I** | `Active` | స్టేటస్ (`TRUE` to show, `FALSE` to hide) | `TRUE` |

---

## 🔓 Step 2: Make the Sheet Publicly Viewable

Google Sheets must be set to "Anyone with the link can view" so the website can read the announcements:

1. Click the green **Share** button in the top right of your Google Sheet.
2. Under **General Access**, change from *Restricted* to:
   👉 **"Anyone with the link"**
3. Ensure the permission is set to **Viewer** (DO NOT make it Editor).
4. Click **Done**.

---

## 🔑 Step 3: Copy Your Sheet ID

Look at the URL in your browser's address bar:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit#gid=0
                                       ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
```

The long string between `/d/` and `/edit` is your **Sheet ID**:
👉 `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

---

## 🚀 Step 4: Connecting the Sheet to the Website

You have **two effortless ways** to connect the sheet:

### Option A: Instant Live Testing (No Code / No Commit Needed)
Simply open the website with `?sheet=YOUR_SHEET_ID`:
```
https://svsas-temple.github.io/?sheet=YOUR_SHEET_ID
```
The website will save this sheet ID in your browser and immediately display the live events!

### Option B: Permanent Connection (For All Website Visitors)
1. Open [`app.js`](file:///c:/Users/sandy/Antigravity%20Projects/Temple%20Website/app.js).
2. At line 578, locate `GOOGLE_SHEET_CONFIG`:
```javascript
const GOOGLE_SHEET_CONFIG = {
  sheetId: "YOUR_SHEET_ID_HERE", // Paste your Sheet ID between the quotes
  sheetName: "Events"
};
```
3. Save and push to GitHub (`git commit -am "chore: connect temple google sheet"` && `git push`).
4. Every devotee visiting the website will now see the latest events pulled live from the Google Sheet!

---

## 📱 Step 5: (Optional) Create a Mobile Google Form for the Committee

To make updating even easier from mobile phones, you can link a **Google Form** to your Google Sheet:

1. In your Google Sheet, click **Tools** → **Create a new form**.
2. Name the form: **"SVSAS Temple - Add New Festival/Event"**.
3. Add the fields corresponding to the columns:
   - Event Title (English)
   - ఉత్సవం పేరు (తెలుగులో)
   - Date / Festival Day
   - Puja Timings
   - Deity Category (Multiple Choice: `ayyappa`, `vinayaka`, `subramanya`)
   - Description (English)
   - ఉత్సవ విశేషాలు (తెలుగు)
   - Special Offerings / Notes
4. Share this Google Form link on the **Temple Committee WhatsApp Group**.
5. Whenever a trustee submits this simple form from their phone, the Google Sheet automatically updates, and the website reflects the announcement instantly!

---

## 💡 How to Temporarily Hide or Archive an Event

You never need to delete historical records:
- In Column `I` (`Active`), change `TRUE` to `FALSE`.
- The event will immediately stop appearing on the website, but you keep your historical record safe in the sheet for next year's festival!

---

## 🪔 Direct Inquiry via WhatsApp

Every event card on the website includes an **"Inquire on WhatsApp"** button. When devotees click this button, it opens WhatsApp directly with a pre-filled message mentioning the specific festival name and date, directed to the committee contact number.
