
import { AgeResult } from '../types';

export const calculateAge = (birthDateStr: string, targetDateStr: string = new Date().toISOString()): AgeResult => {
  const birth = new Date(birthDateStr);
  const target = new Date(targetDateStr);

  if (isNaN(birth.getTime()) || isNaN(target.getTime())) {
    throw new Error("Invalid date provided");
  }

  let years = target.getFullYear() - birth.getFullYear();
  let months = target.getMonth() - birth.getMonth();
  let days = target.getDate() - birth.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    const lastMonth = new Date(target.getFullYear(), target.getMonth(), 0);
    days += lastMonth.getDate();
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  const diffMs = target.getTime() - birth.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const totalSeconds = Math.floor(diffMs / 1000);

  // Next birthday calculation
  const nextBirthday = new Date(target.getFullYear(), birth.getMonth(), birth.getDate());
  if (nextBirthday < target) {
    nextBirthday.setFullYear(target.getFullYear() + 1);
  }
  const nextBirthdayDiff = nextBirthday.getTime() - target.getTime();
  const nextBirthdayDays = Math.ceil(nextBirthdayDiff / (1000 * 60 * 60 * 24));

  return {
    years,
    months,
    days,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
    nextBirthdayDays
  };
};
