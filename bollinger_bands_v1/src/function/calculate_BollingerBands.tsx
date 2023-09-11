
//from chatgpt -- 2023-09-11
interface BollingerBands {
    upper: number[];
    middle: number[];
    lower: number[];
  }
  
  function calculateBollingerBands(prices: number[], period: number, deviations: number): BollingerBands {
    if (prices.length < period) {
      throw new Error('주가 데이터의 길이가 주어진 기간보다 짧습니다.');
    }
  
    const middle: number[] = [];
    const upper: number[] = [];
    const lower: number[] = [];
  
    for (let i = period - 1; i < prices.length; i++) {
      const slice = prices.slice(i - period + 1, i + 1);
      const mean = slice.reduce((sum, price) => sum + price, 0) / period;
      const variance = slice.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / period;
      const stdDeviation = Math.sqrt(variance);
  
      middle.push(mean);
      upper.push(mean + deviations * stdDeviation);
      lower.push(mean - deviations * stdDeviation);
    }
  
    return { upper, middle, lower };
  }
  
  // 예제 주가 데이터와 기간, 표준 편차를 설정합니다.
  const examplePrices: number[] = [100, 105, 110, 115, 120, 125, 120, 115, 110, 105, 100];
  const period: number = 5; // 이동 평균 기간
  const deviations: number = 2; // 표준 편차 배수
  
  // 볼린저 밴드 계산
  const bollingerBands = calculateBollingerBands(examplePrices, period, deviations);
  
  console.log('상한 밴드:', bollingerBands.upper);
  console.log('중간 밴드:', bollingerBands.middle);
  console.log('하한 밴드:', bollingerBands.lower);
  