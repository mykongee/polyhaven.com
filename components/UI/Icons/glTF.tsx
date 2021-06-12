const Icon = ({ color }) => {
  return (
    <svg version="1.1" baseProfile="tiny" id="glTF" xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px" width="1.5em" height="1em" viewBox="0 0 1000 500" >
      <g>
        <g>
          <path fill={color} d="M419.67,403.73c14.76-16.55,22.56-40.74,22.56-73.32V148.37h-31.17v28.48h-0.38
			c-5.91-11.03-14.11-19.3-24.63-24.82c-10.52-5.51-22.07-8.27-34.64-8.27c-17.19,0-31.69,3.27-43.49,9.81
			c-11.8,6.54-21.3,14.95-28.48,25.21c-7.19,10.26-12.32,21.55-15.4,33.87c-3.08,12.32-4.62,24.38-4.62,36.18
			c0,13.6,1.86,26.5,5.58,38.68c3.72,12.19,9.3,22.9,16.74,32.14c7.44,9.24,16.68,16.55,27.71,21.94s23.99,8.08,38.88,8.08
			c6.16,0,12.38-0.77,18.67-2.31c6.29-1.54,12.19-3.78,17.71-6.74c5.51-2.95,10.45-6.67,14.82-11.16
			c4.36-4.49,7.95-9.81,10.78-15.97h0.76v13.08c0,11.29-1.09,21.55-3.27,30.79c-2.18,9.24-5.71,17.13-10.58,23.67
			c-4.88,6.54-11.04,11.67-18.47,15.4c-7.44,3.72-16.55,5.58-27.32,5.58c-5.39,0-11.04-0.58-16.93-1.73
			c-2.13-0.42-4.2-0.93-6.21-1.53c-2.19-0.77-4.36-1.56-6.51-2.36c-0.2-0.08-0.4-0.17-0.6-0.26v0.04
			C236.63,364.58,181,310.91,181,250c0-97.15,141.52-175.9,316.1-175.9c97.25,0,184.45,22.15,242.44,60.59
			C676.24,70.28,562.76,25.02,433,25C234.28,24.96,73.17,125.67,73.15,249.94C73.14,334.76,148.2,408.63,259.05,447
			C347.96,450.04,393.09,433.54,419.67,403.73z M406.25,271.53c-2.18,9.24-5.58,17.51-10.2,24.82c-4.62,7.31-10.71,13.22-18.28,17.7
			c-7.57,4.49-16.74,6.74-27.52,6.74c-10.78,0-19.76-2.24-26.94-6.74c-7.19-4.48-12.96-10.39-17.32-17.7
			c-4.37-7.31-7.44-15.45-9.24-24.44c-1.8-8.98-2.69-17.96-2.69-26.94c0-9.49,1.09-18.6,3.27-27.33
			c2.18-8.72,5.64-16.42,10.39-23.09c4.74-6.67,10.84-11.99,18.28-15.97c7.44-3.98,16.42-5.97,26.94-5.97
			c10.26,0,18.98,2.06,26.17,6.16c7.18,4.11,13.02,9.56,17.51,16.36c4.49,6.8,7.76,14.43,9.81,22.9c2.05,8.47,3.08,17.07,3.08,25.79
			C409.52,253.05,408.43,262.29,406.25,271.53z"/>
          <path fill={color} d="M434.85,422.49c-18.85,17.11-52.53,36.65-98.4,44.32c30.71,5.34,63.07,8.19,96.49,8.2
			c129.24,0.03,242.42-45.09,305.88-109.05c-57.98,38.21-144.83,59.95-241.73,59.95C474.08,425.9,456.47,425.09,434.85,422.49z"/>
        </g>
        <g>
          <g>
            <path fill={color} d="M633.84,347.91h-46.96V189.7h-58.92v-40.23h164.81v40.23h-58.92V347.91L633.84,347.91z" />
          </g>
          <g>
            <path fill={color} d="M764.17,347.91h-46.97V149.47h144.99v40.23h-98.02v37.13h85.8v40.23h-85.8V347.91L764.17,347.91z" />
          </g>
        </g>
        <path fill={color} d="M469.55,100.03h32.71v247.31h-32.71V100.03z" />
      </g>
      <g id="TM_2_">
        <path fill={color} d="M902.78,155.29h-7.35v19.11h-6.42v-19.11h-7.35v-5.52h21.11L902.78,155.29L902.78,155.29z" />
        <path fill={color} d="M905.65,149.77h9.45l4.24,16.42h0.07l4.24-16.42h9.45v24.63h-6.04v-18.7H927l-5.17,18.7h-4.9l-5.18-18.7
		h-0.07v18.7h-6.04V149.77L905.65,149.77z"/>
      </g>
    </svg>
  )
}

Icon.defaultProps = {
  color: "currentColor"
}

export default Icon
