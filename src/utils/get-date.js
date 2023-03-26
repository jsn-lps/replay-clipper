
export default function RFCDate(numberOfDays) {
    let  date = new Date()
    date.setDate(new Date().getDate() - numberOfDays);
    const startDate = date.toISOString();
    return startDate
}