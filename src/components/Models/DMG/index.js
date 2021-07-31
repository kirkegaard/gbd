import { useStore } from "../../../contexts/store";

const DMG = () => {
  const { data } = useStore();
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 600 1000"
    >
      <g id="Layer_1">
        <path
          id="shell_x5F_color"
          style={{ fill: data.shell_color }}
          d="M499.64,1000H50.2C22.48,1000,0,977.52,0,949.8V50.2C0,22.48,22.48,0,50.2,0
    h499.6C577.52,0,600,22.48,600,50.2v849.44C600,955.07,555.07,1000,499.64,1000z"
        />
        <polygon
          style={{ opacity: 0.15 }}
          points="554.3,45.7 554.3,0 545.97,0 545.97,45.7 54.03,45.7 54.03,0 45.7,0 45.7,45.7 0,45.7
    0,54.03 600,54.03 600,45.7  "
        />
        <path
          style={{ opacity: 0.5, fill: "#FFFFFF" }}
          d="M440.91,772.88c-19.8,10.92-44.71,3.71-55.62-16.09c-10.92-19.8-3.71-44.71,16.09-55.62
    l94.89-52.3c19.8-10.92,44.71-3.71,55.62,16.09c10.92,19.8,3.71,44.71-16.09,55.62L440.91,772.88z"
        />
        <circle
          style={{ opacity: 0.5, fill: "#FFFFFF" }}
          cx="127.91"
          cy="708.76"
          r="81.89"
        />
        <g>
          <path
            style={{ fill: "#313133" }}
            d="M479.08,974.49L479.08,974.49c-1.88,1.21-4.38,0.67-5.59-1.21l-35.47-55.02
      c-1.21-1.88-0.67-4.38,1.21-5.59l0,0c1.88-1.21,4.38-0.67,5.59,1.21l35.47,55.02C481.5,970.78,480.96,973.28,479.08,974.49z"
          />
          <path
            style={{ fill: "#313133" }}
            d="M499.22,961.88L499.22,961.88c-1.88,1.21-4.38,0.67-5.59-1.21l-35.47-55.02
      c-1.21-1.88-0.67-4.38,1.21-5.59l0,0c1.88-1.21,4.38-0.67,5.59,1.21l35.47,55.02C501.64,958.16,501.1,960.67,499.22,961.88z"
          />
          <path
            style={{ fill: "#313133" }}
            d="M519.36,949.26L519.36,949.26c-1.88,1.21-4.38,0.67-5.59-1.21l-35.47-55.02
      c-1.21-1.88-0.67-4.38,1.21-5.59l0,0c1.88-1.21,4.38-0.67,5.59,1.21l35.47,55.02C521.78,945.55,521.24,948.05,519.36,949.26z"
          />
          <path
            style={{ fill: "#313133" }}
            d="M539.51,936.65L539.51,936.65c-1.88,1.21-4.38,0.67-5.59-1.21l-35.47-55.02
      c-1.21-1.88-0.67-4.38,1.21-5.59h0c1.88-1.21,4.38-0.67,5.59,1.21l35.47,55.02C541.92,932.93,541.38,935.44,539.51,936.65z"
          />
          <path
            style={{ fill: "#313133" }}
            d="M559.65,924.03L559.65,924.03c-1.88,1.21-4.38,0.67-5.59-1.21l-35.47-55.02
      c-1.21-1.88-0.67-4.38,1.21-5.59v0c1.88-1.21,4.38-0.67,5.59,1.21l35.47,55.02C562.07,920.32,561.53,922.82,559.65,924.03z"
          />
          <path
            style={{ fill: "#313133" }}
            d="M579.79,911.42L579.79,911.42c-1.88,1.21-4.38,0.67-5.59-1.21l-35.47-55.02
      c-1.21-1.88-0.67-4.38,1.21-5.59h0c1.88-1.21,4.38-0.67,5.59,1.21L581,905.82C582.21,907.7,581.67,910.2,579.79,911.42z"
          />
        </g>
        <path
          id="lens_x5F_color"
          style={{ fill: data.lens_color }}
          d="M480.99,524.93H59.98c-7.71,0-13.96-6.25-13.96-13.96V108.4
    c0-7.71,6.25-13.96,13.96-13.96h479.38c7.71,0,13.96,6.25,13.96,13.96v344.19C553.32,492.54,520.94,524.93,480.99,524.93z"
        />
        <rect
          id="screen_x5F_color"
          x="118.23"
          y="148.79"
          style={{ fill: data.screen_color }}
          width="362.87"
          height="321.8"
        />
        <circle
          id="led_x5F_color"
          style={{ fill: data.led_color }}
          cx="77.49"
          cy="218.01"
          r="13.1"
        />
        <circle
          id="a_x5F_color"
          style={{ fill: data.a_color }}
          cx="516.03"
          cy="684.72"
          r="32.86"
        />
        <circle
          id="b_x5F_color"
          style={{ fill: data.b_color }}
          cx="422.95"
          cy="736.02"
          r="32.86"
        />
        <path
          id="dpad_x5F_color"
          style={{ fill: data.dpad_color }}
          d="M185.68,683.5h-28.63c-2.14,0-3.88-1.74-3.88-3.88v-28.63
    c0-2.14-1.74-3.88-3.88-3.88h-42.75c-2.14,0-3.88,1.74-3.88,3.88v28.63c0,2.14-1.74,3.88-3.88,3.88H70.14
    c-2.14,0-3.88,1.74-3.88,3.88v42.75c0,2.14,1.74,3.88,3.88,3.88h28.63c2.14,0,3.88,1.74,3.88,3.88v28.63
    c0,2.14,1.74,3.88,3.88,3.88h42.75c2.14,0,3.88-1.74,3.88-3.88V737.9c0-2.14,1.74-3.88,3.88-3.88h28.63c2.14,0,3.88-1.74,3.88-3.88
    v-42.75C189.56,685.24,187.82,683.5,185.68,683.5z"
        />
        <g id="start_x5F_select">
          <path
            style={{ fill: data.start_select_color }}
            d="M275.08,840.19l-48.71,24.37c-3.59,1.8-7.95,0.34-9.75-3.25h0c-1.8-3.59-0.34-7.95,3.25-9.75
      l48.71-24.37c3.59-1.8,7.95-0.34,9.75,3.25l0,0C280.13,834.03,278.67,838.4,275.08,840.19z"
          />
          <path
            style={{ fill: data.start_select_color }}
            d="M368.24,840.19l-48.71,24.37c-3.59,1.8-7.95,0.34-9.75-3.25l0,0c-1.8-3.59-0.34-7.95,3.25-9.75
      l48.71-24.37c3.59-1.8,7.95-0.34,9.75,3.25h0C373.29,834.03,371.83,838.4,368.24,840.19z"
          />
        </g>
      </g>
    </svg>
  );
};

export default DMG;
