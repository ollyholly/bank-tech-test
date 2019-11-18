/* eslint-disable class-methods-use-this */
class FormatDate {
  getDate() {
    let now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();
    now = `${dd}/${mm}/${yyyy}`;
    return now;
  }
}
module.exports = FormatDate;
