
import { BlogPost, FAQItem } from './types';

export const SITE_NAME = "Age Track";
export const CONTACT_EMAIL = "support@agetrack.com";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "calculate-age-manually",
    title: "How to Calculate Age Manually: A Step-by-Step Guide",
    date: "May 15, 2024",
    author: "Dr. Sarah Miller",
    category: "Education",
    image: "https://picsum.photos/seed/math/800/400",
    excerpt: "Learn the mathematical principles behind age calculation and how to subtract dates like a pro.",
    content: `
      <h2>The Mathematics of Time: Understanding Date Subtraction</h2>
      <p>Calculating your age manually might seem simple at first glance, but it involves complex arithmetic when handling leap years, varying month lengths, and the transition of calendar eras. In this guide, we dive deep into the chronological methods used by mathematicians and historians.</p>
      <h3>Step 1: The Carry-Over Method</h3>
      <p>To subtract dates manually, you must list the target date above the birth date. For example, if today is October 10, 2023, and you were born on November 15, 1995, you must borrow from the months column to subtract the days. This 'carry-over' logic is the backbone of all manual chronological calculations.</p>
      <p>Borrowing days is tricky because months have different lengths (28, 29, 30, or 31 days). Our manual guide explains exactly how to adjust for February leap years and the 30-day rule for April, June, September, and November.</p>
      <h3>Step 2: Accounting for Leap Years</h3>
      <p>Did you know that every year divisible by 4 is a leap year, except for century years not divisible by 400? This rule, established by the Gregorian Calendar reform in 1582, ensures our calendar remains synchronized with the Earth's orbit around the sun. When calculating age manually over several decades, you must manually count these extra 24-hour periods to get an accurate total day count.</p>
      <h3>Why Manual Knowledge Matters</h3>
      <p>While tools like Age Track make it instantaneous, understanding the logic helps in critical situations like manual record keeping in remote areas or verifying historical documents where digital tools aren't available.</p>
    `
  },
  {
    id: "government-documents-importance",
    title: "Importance of Age Calculation in Government Documents",
    date: "June 2, 2024",
    author: "James Wilson",
    category: "Legal",
    image: "https://picsum.photos/seed/legal/800/400",
    excerpt: "Why accuracy matters for passports, voting registrations, and retirement benefits.",
    content: `
      <h2>The Legal Weight of a Single Day</h2>
      <p>In the eyes of the law, reaching a certain age is a threshold that triggers significant rights and responsibilities. Whether it is the right to vote, the requirement to serve in a jury, or the eligibility for social security benefits, precise age calculation is paramount.</p>
      <h3>Passport and Identity Verification</h3>
      <p>Government agencies utilize standardized chronological formulas to verify identity. A discrepancy of even one day on a birth certificate compared to an application can lead to administrative delays or rejection. We explore the international standards for date formats and how they impact cross-border age verification.</p>
      <h3>Retirement and Social Security</h3>
      <p>For many, the difference between retiring at 65 versus 67 is a matter of thousands of dollars in pension benefits. Understanding exactly when you hit these milestones helps in financial planning and ensures you don't miss critical application windows.</p>
    `
  },
  {
    id: "age-difference-guide",
    title: "Age Difference Calculation Guide: Understanding Gaps",
    date: "June 10, 2024",
    author: "Elena Rodriguez",
    category: "Social Science",
    image: "https://picsum.photos/seed/people/800/400",
    excerpt: "How to calculate the precise gap between two people and what it means for social dynamics.",
    content: `
      <h2>Calculating the Chronological Gap</h2>
      <p>Age gaps are a fascinating aspect of social science and genealogy. Whether you are comparing siblings, colleagues, or historical figures, knowing the exact duration between two births provides context to their relationship.</p>
      <h3>The Formula for Differences</h3>
      <p>To find the age difference, subtract the earlier birth date from the later one. This gives you a static gap that never changes. However, as both individuals age, the *ratio* of their ages does change, which is a common point of confusion in social discussions.</p>
      <p>In this article, we provide tables and formulas for calculating differences in months and total days, which is often used in medical research studying twins or developmental milestones in children.</p>
    `
  },
  {
    id: "date-difference-tutorial",
    title: "Date Difference Calculator Tutorial: Beyond Birthdays",
    date: "July 1, 2024",
    author: "Mark Thompson",
    category: "Tech Tips",
    image: "https://picsum.photos/seed/tech/800/400",
    excerpt: "Using date subtraction for project management, pregnancy tracking, and anniversaries.",
    content: `
      <h2>The Versatility of Date Subtraction</h2>
      <p>While 'Age' usually refers to living beings, the concept of a 'date difference' applies to everything from project deadlines to the duration of historical empires. This tutorial teaches you how to leverage Age Track's core engine for broader use cases.</p>
      <h3>Project Management</h3>
      <p>Calculate the exact number of working days between a project start date and a milestone. By subtracting weekend offsets, you can get a realistic view of productivity windows.</p>
      <h3>Personal Milestones</h3>
      <p>How many days have you been married? How many weeks until your next vacation? We show you how to input 'Future Dates' into our calculator to get precise countdowns down to the very minute.</p>
    `
  },
  {
    id: "common-mistakes-age-calc",
    title: "Common Mistakes in Age Calculation and How to Avoid Them",
    date: "July 15, 2024",
    author: "Dr. Sarah Miller",
    category: "Education",
    image: "https://picsum.photos/seed/mistakes/800/400",
    excerpt: "Avoid these pitfalls when calculating ages for insurance, sports, or school admissions.",
    content: `
      <h2>Top 5 Chronological Pitfalls</h2>
      <p>Even experts can make mistakes when dates get complicated. We've compiled the most common errors seen in academic and legal submissions.</p>
      <h3>1. Ignoring the Leap Year Extra Day</h3>
      <p>Many people assume every year is 365 days. Over an 80-year lifespan, failing to account for leap years leads to a 20-day error. This can be critical for health data or scientific studies.</p>
      <h3>2. The Month-End Transition</h3>
      <p>If someone is born on August 31, what is their '1-month-old' date? Is it September 30 or October 1? Different cultures and systems (like the insurance industry) have different rules for this 'clipping' behavior. We explain the 'European vs American' approaches to month-end birthdays.</p>
      <h3>3. Time Zone Discrepancies</h3>
      <p>For those born near midnight, the date on a birth certificate depends entirely on the time zone of the hospital. When calculating age for international travel, these small offsets can sometimes matter.</p>
    `
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How accurate is the Age Track calculator?",
    answer: "Age Track uses high-precision astronomical and chronological algorithms that account for all Gregorian leap year rules and varying month lengths, ensuring 100% accuracy for any date after 1582."
  },
  {
    question: "Can I calculate age for historical figures?",
    answer: "Yes, as long as the dates follow the Gregorian calendar. Note that for dates before the mid-1700s, some countries were still using the Julian calendar, which may require a manual offset."
  },
  {
    question: "Does this tool store my birth date?",
    answer: "No. Your privacy is our priority. All calculations are performed locally in your browser, and no personal date information is sent to our servers."
  },
  {
    question: "Why do some calculators show different total days?",
    answer: "Some simple calculators assume every year is 365 days. Age Track accounts for the specific leap years that occurred between your birth and today, providing a more precise total."
  }
];
