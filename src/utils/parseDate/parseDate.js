import moment from 'moment';

const parseDate = (date) => {
  if (!date) {
    return null;
  }
  return moment(date).format('L');
};

export default parseDate;
