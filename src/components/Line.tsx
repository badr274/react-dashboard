import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
const data = [
  {
    id: "japan",
    color: "hsl(46, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 262,
      },
      {
        x: "helicopter",
        y: 234,
      },
      {
        x: "boat",
        y: 79,
      },
      {
        x: "train",
        y: 159,
      },
      {
        x: "subway",
        y: 117,
      },
      {
        x: "bus",
        y: 26,
      },
      {
        x: "car",
        y: 285,
      },
      {
        x: "moto",
        y: 81,
      },
      {
        x: "bicycle",
        y: 76,
      },
      {
        x: "horse",
        y: 230,
      },
      {
        x: "skateboard",
        y: 242,
      },
      {
        x: "others",
        y: 122,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(322, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 254,
      },
      {
        x: "helicopter",
        y: 92,
      },
      {
        x: "boat",
        y: 136,
      },
      {
        x: "train",
        y: 243,
      },
      {
        x: "subway",
        y: 225,
      },
      {
        x: "bus",
        y: 6,
      },
      {
        x: "car",
        y: 42,
      },
      {
        x: "moto",
        y: 221,
      },
      {
        x: "bicycle",
        y: 153,
      },
      {
        x: "horse",
        y: 246,
      },
      {
        x: "skateboard",
        y: 235,
      },
      {
        x: "others",
        y: 85,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(128, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 41,
      },
      {
        x: "helicopter",
        y: 234,
      },
      {
        x: "boat",
        y: 40,
      },
      {
        x: "train",
        y: 219,
      },
      {
        x: "subway",
        y: 78,
      },
      {
        x: "bus",
        y: 229,
      },
      {
        x: "car",
        y: 34,
      },
      {
        x: "moto",
        y: 54,
      },
      {
        x: "bicycle",
        y: 193,
      },
      {
        x: "horse",
        y: 82,
      },
      {
        x: "skateboard",
        y: 143,
      },
      {
        x: "others",
        y: 32,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(181, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 12,
      },
      {
        x: "helicopter",
        y: 56,
      },
      {
        x: "boat",
        y: 246,
      },
      {
        x: "train",
        y: 285,
      },
      {
        x: "subway",
        y: 50,
      },
      {
        x: "bus",
        y: 85,
      },
      {
        x: "car",
        y: 299,
      },
      {
        x: "moto",
        y: 225,
      },
      {
        x: "bicycle",
        y: 4,
      },
      {
        x: "horse",
        y: 86,
      },
      {
        x: "skateboard",
        y: 211,
      },
      {
        x: "others",
        y: 154,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(60, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 133,
      },
      {
        x: "helicopter",
        y: 121,
      },
      {
        x: "boat",
        y: 286,
      },
      {
        x: "train",
        y: 58,
      },
      {
        x: "subway",
        y: 15,
      },
      {
        x: "bus",
        y: 138,
      },
      {
        x: "car",
        y: 192,
      },
      {
        x: "moto",
        y: 269,
      },
      {
        x: "bicycle",
        y: 237,
      },
      {
        x: "horse",
        y: 276,
      },
      {
        x: "skateboard",
        y: 61,
      },
      {
        x: "others",
        y: 78,
      },
    ],
  },
];
interface ILine {
  isDashboard?: boolean;
}
const Line = ({ isDashboard = false }: ILine) => {
  const theme = useTheme();
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      theme={{
        text: {
          fontSize: 11,
          fill: "#333333",
          outlineWidth: 0,
          outlineColor: "transparent",
        },

        axis: {
          domain: {
            line: {
              stroke: "#777777",
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 12,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          ticks: {
            line: {
              fill: "#777777",
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        grid: {
          line: {
            stroke: "#777777",
            strokeWidth: 1,
          },
        },
        legends: {
          title: {
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          ticks: {
            line: {},
            text: {
              fontSize: 10,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        annotations: {
          text: {
            fontSize: 13,
            fill: theme.palette.text.primary,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          link: {
            stroke: "#000000",
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          outline: {
            stroke: "#000000",
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          symbol: {
            fill: "#000000",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
        },
        tooltip: {
          wrapper: {},
          container: {
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: !isDashboard ? "transportation" : null,
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: !isDashboard ? "transportation" : null,
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Line;
