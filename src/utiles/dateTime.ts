import moment from "moment";

export function dateTimeFormat(date: string) {
    if (!date) {
        return
    }
    let result = moment(date).format('YYYY-MM-DD HH:mm')
    return result;
}