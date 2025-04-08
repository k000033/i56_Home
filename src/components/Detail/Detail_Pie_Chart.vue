<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts/core';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { TooltipComponent } from 'echarts/components';

// 按需註冊組件
echarts.use([GaugeChart, TooltipComponent, CanvasRenderer]);

const chartRef = ref(null);
let myChart = null;

onMounted(() => {
  if (chartRef.value) {
    myChart = echarts.init(chartRef.value);

    const option = {
      series: [
        {
          type: 'gauge',
          radius: '100%',
          axisLine: {
            lineStyle: {
              width: 20,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -20,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          axisLabel: {
            color: 'inherit',
            distance: 30,
            fontSize: 12
          },
          detail: {
            valueAnimation: true,
            formatter: [
              `{a|                  00:00}`,
              '{a|行驶时间       0:00}{b| h}',
              '{a|行驶距离        0.0}{b| km}',
              '{a|平均耗能        ---}{b| 1/100km}',
              '{a|平均速度        ---}{b| km/h}'
            ].join('\n'),
            color: 'inherit',
            fontSize: 12
          },
          data: [
            {
              value: 70
            }
          ]
        }
      ]
    };

    myChart.setOption(option);

    setInterval(() => {
      myChart.setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed(2)
              }
            ]
          }
        ]
      });
    }, 2000);

    window.addEventListener('resize', () => myChart.resize());
  }
});
</script>

<template>
  <div ref="chartRef" style="width: 40%; height: 200px"></div>
</template>
