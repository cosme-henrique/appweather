import * as React from "react"
import Svg, {
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient
} from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={198}
      height={198}
      viewBox="0 0 198 198"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M99 43.313c30.755 0 55.688 24.932 55.688 55.687S129.755 154.688 99 154.688c-30.755 0-55.688-24.933-55.688-55.688 0-30.755 24.933-55.688 55.688-55.688z"
        fill="url(#paint0_radial_16_39)"
      />
      <Path
        d="M99 163.969a9.28 9.28 0 019.281 9.281v9.281A9.28 9.28 0 0199 191.812a9.28 9.28 0 01-9.281-9.281v-9.281A9.28 9.28 0 0199 163.969zm59.066-19.029l6.563 6.563c3.624 3.624 3.624 9.5 0 13.126-3.625 3.624-9.502 3.624-13.126 0l-6.563-6.563a9.283 9.283 0 0113.126-13.126zm-118.132 0a9.28 9.28 0 0113.126 0c3.345 3.346 3.603 8.611.772 12.252l-.772.874-6.563 6.563a9.282 9.282 0 01-13.898-12.252l.772-.874 6.563-6.563zM24.75 89.719A9.281 9.281 0 0134.031 99c0 4.76-3.583 8.683-8.199 9.219l-1.082.062h-9.281A9.281 9.281 0 016.188 99c0-4.76 3.582-8.683 8.198-9.219l1.083-.062h9.281zm157.781 0A9.28 9.28 0 01191.812 99a9.28 9.28 0 01-9.281 9.281h-9.281A9.28 9.28 0 01163.969 99a9.28 9.28 0 019.281-9.281h9.281zM33.371 33.37c3.346-3.346 8.61-3.603 12.252-.772l.874.772 6.563 6.563a9.281 9.281 0 010 13.126c-3.346 3.345-8.61 3.603-12.251.772l-.875-.772-6.563-6.563a9.281 9.281 0 010-13.126zm131.258 0a9.282 9.282 0 010 13.126l-6.563 6.563a9.282 9.282 0 01-13.126-13.126l6.563-6.563c3.624-3.624 9.5-3.624 13.126 0zM99 6.187a9.281 9.281 0 019.281 9.282v9.281a9.281 9.281 0 11-18.562 0v-9.281A9.281 9.281 0 0199 6.188z"
        fill="url(#paint1_linear_16_39)"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_16_39"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(43.02 -42.447 105.153) scale(129.054)"
        >
          <Stop offset={0.193671} stopColor="#FFE475" />
          <Stop offset={0.529275} stopColor="#FFB029" />
          <Stop offset={0.780467} stopColor="#FF9100" />
        </RadialGradient>
        <LinearGradient
          id="paint1_linear_16_39"
          x1={5.02734}
          y1={5.02735}
          x2={192.973}
          y2={192.973}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.166667} stopColor="#FFE475" />
          <Stop offset={0.798611} stopColor="#FFBF29" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
