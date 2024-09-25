import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);
export function  GraphicsActivities (props){

    const {
        percentageFinishAct,
      } = useSelector((state) => state);

    let options = {
        responsive : true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    font: {
                        size: props.font ? props.font :15,
                    },
                },
                display: true,
                position: props.position, 
            },
        },
    };
    let data ={
        labels:['Inicio', 'Organización','Ejecución', 'Cierre'],
        datasets: [
            {
                label: 'total',
                data: props.data && props.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)', // Cambiado a rojo
                    'rgba(255, 206, 86, 0.2)',  // Cambiado a amarillo
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)', // Cambiado a rojo
                    'rgba(255, 206, 86, 1)', // Cambiado a amarillo
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                  ],
  
                hoverOffset: 4
            },
        ],
    }
    return  <Doughnut data={data} options={options} />
      
  };
  

  