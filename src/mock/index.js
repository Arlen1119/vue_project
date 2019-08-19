import Mock from 'mockjs';

Mock.mock(/queryPatientList/, (options) => {
  console.log(options);
  let len = 20;
  if (options.body.indexOf('40') > 0) {
    len = 40;
  } else if (options.body.indexOf('60') > 0) {
    len = 60;
  }
  const tableData = [];
  for (let i = 0; i < len; i++) {
    const j = i < 10 ? `0${i}` : i;
    tableData.push({
      chooseStatus: false,
      accessionNumber: 'CT201804040062',
      aiResult: '检测中',
      gpResult: '待检测',
      modality: 'CT',
      patientAge: '67岁',
      patientId: 'p00085109',
      patientName: 'Liu_Shi_Yan',
      patientSex: '男',
      seriesInstanceUid:
        '1.3.12.2.1107.5.1.4.83318.30000018040922372487300006452',
      studyDate: `2018.04.${j}`,
      twResult: '待检测',
      uploadDate: `2018.05.${j}`,
      totalNum: 40,
    });
  }
  return {
    code: '000000',
    data: tableData,
  };
});
