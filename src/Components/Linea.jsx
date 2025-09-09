


function CurvedArrow(){
    return(
        <svg
            width="60"
           height="40"
           viewBox="0 0 60 40"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 6 3, 0 6" fill="black" />
        </marker>
      </defs>
      
      <path
        d="
          M 10 20
          Q 15 10, 25 20
          Q 35 30, 45 15
          Q 50 10, 60 10
        "
        stroke="black"
        strokeWidth="1.5"
        fill="transparent"
        markerEnd="url(#arrowhead)"
      />
    </svg>
        

   
  );
}



export default CurvedArrow