import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar=()=>
{
    return (
        <nav>
            <svg width="316" height="64" viewBox="0 0 316 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86.957 16.895L85.6388 24.3787H77.6448L73.6478 47H64.2081L68.2051 24.3787H60.2961L61.6143 16.895H86.957ZM99.4672 22.7204C102.642 22.7204 105.165 23.5708 107.036 25.2717C108.907 26.9442 109.842 29.2403 109.842 32.1601C109.842 32.9822 109.757 33.8609 109.587 34.7964C109.389 35.7319 109.233 36.3555 109.119 36.6673H93.9819C93.9536 36.8374 93.9394 37.0784 93.9394 37.3902C93.9394 38.9777 94.6197 39.7714 95.9804 39.7714C97.0293 39.7714 97.8514 39.3037 98.4467 38.3682H108.439C107.815 40.069 106.838 41.5998 105.505 42.9605C104.173 44.2928 102.6 45.3558 100.785 46.1496C98.9994 46.915 97.1143 47.2976 95.13 47.2976C91.9551 47.2976 89.4322 46.4614 87.5612 44.7889C85.7186 43.088 84.7973 40.7352 84.7973 37.7304C84.7973 36.8516 84.8824 35.9445 85.0525 35.009C85.506 32.5144 86.4131 30.3459 87.7738 28.5033C89.1345 26.6323 90.8212 25.2008 92.8338 24.2086C94.8749 23.2165 97.086 22.7204 99.4672 22.7204ZM100.36 32.7979C100.388 32.6562 100.403 32.4436 100.403 32.1601C100.403 31.4798 100.19 30.9695 99.7648 30.6293C99.3396 30.2892 98.801 30.1191 98.149 30.1191C96.4482 30.1191 95.3001 31.012 94.7048 32.7979H100.36ZM111.255 35.009C111.708 32.5144 112.615 30.3459 113.976 28.5033C115.337 26.6323 117.023 25.2008 119.036 24.2086C121.077 23.2165 123.288 22.7204 125.669 22.7204C128.787 22.7204 131.254 23.5992 133.068 25.3567C134.91 27.1142 135.846 29.5521 135.874 32.6703H125.882C125.683 31.4231 125.06 30.7994 124.011 30.7994C123.245 30.7994 122.579 31.1538 122.012 31.8624C121.474 32.5711 121.077 33.62 120.822 35.009C120.708 35.8027 120.652 36.3272 120.652 36.5823C120.652 37.4611 120.822 38.1272 121.162 38.5808C121.502 39.006 121.97 39.2186 122.565 39.2186C123.642 39.2186 124.464 38.595 125.031 37.3477H135.024C133.918 40.4659 132.132 42.9038 129.666 44.6613C127.228 46.4189 124.45 47.2976 121.332 47.2976C118.157 47.2976 115.634 46.4614 113.763 44.7889C111.921 43.088 110.999 40.7352 110.999 37.7304C110.999 36.8516 111.084 35.9445 111.255 35.009ZM157.363 22.8479C159.688 22.8479 161.474 23.5283 162.721 24.889C163.968 26.2213 164.592 28.0639 164.592 30.4167C164.592 31.2671 164.507 32.1601 164.337 33.0956L161.871 47H152.474L154.727 34.2862C154.784 33.8326 154.812 33.5208 154.812 33.3507C154.812 32.4719 154.557 31.7916 154.047 31.3097C153.565 30.8278 152.885 30.5868 152.006 30.5868C150.957 30.5868 150.078 30.9128 149.369 31.5648C148.689 32.2168 148.236 33.1239 148.009 34.2862V34.2436L145.755 47H136.315L141.886 15.5343H151.325L149.369 26.6323C150.305 25.4984 151.453 24.5913 152.814 23.911C154.174 23.2023 155.691 22.8479 157.363 22.8479ZM212.246 17.1501V47H204.975V29.0986L198.299 47H192.431L185.713 29.056V47H178.442V17.1501H187.031L195.408 37.8154L203.699 17.1501H212.246ZM216.029 35.0941C216.029 32.6562 216.483 30.5159 217.39 28.6734C218.325 26.8308 219.587 25.4134 221.174 24.4212C222.762 23.4291 224.533 22.933 226.489 22.933C228.162 22.933 229.622 23.2732 230.869 23.9535C232.145 24.6338 233.123 25.5268 233.803 26.6323V23.2732H241.074V47H233.803V43.6408C233.094 44.7464 232.102 45.6393 230.827 46.3197C229.579 47 228.119 47.3402 226.447 47.3402C224.519 47.3402 222.762 46.8441 221.174 45.8519C219.587 44.8314 218.325 43.3999 217.39 41.5573C216.483 39.6863 216.029 37.5319 216.029 35.0941ZM233.803 35.1366C233.803 33.3223 233.293 31.8908 232.272 30.8419C231.28 29.7931 230.061 29.2686 228.615 29.2686C227.17 29.2686 225.937 29.7931 224.916 30.8419C223.924 31.8624 223.428 33.2798 223.428 35.0941C223.428 36.9083 223.924 38.354 224.916 39.4312C225.937 40.4801 227.17 41.0045 228.615 41.0045C230.061 41.0045 231.28 40.4801 232.272 39.4312C233.293 38.3824 233.803 36.9508 233.803 35.1366ZM259.559 40.8344V47H255.859C253.223 47 251.168 46.3622 249.694 45.0865C248.22 43.7826 247.483 41.6707 247.483 38.7509V29.3112H244.591V23.2732H247.483V17.4903H254.754V23.2732H259.516V29.3112H254.754V38.8359C254.754 39.5446 254.924 40.0549 255.264 40.3667C255.604 40.6785 256.171 40.8344 256.965 40.8344H259.559ZM262.163 35.1366C262.163 32.6703 262.659 30.5159 263.651 28.6734C264.672 26.8308 266.075 25.4134 267.861 24.4212C269.675 23.4291 271.744 22.933 274.069 22.933C277.045 22.933 279.526 23.7125 281.51 25.2717C283.523 26.8308 284.841 29.0277 285.465 31.8624H277.726C277.074 30.0482 275.812 29.1411 273.941 29.1411C272.609 29.1411 271.546 29.6655 270.752 30.7144C269.959 31.7349 269.562 33.209 269.562 35.1366C269.562 37.0642 269.959 38.5525 270.752 39.6013C271.546 40.6218 272.609 41.1321 273.941 41.1321C275.812 41.1321 277.074 40.225 277.726 38.4107H285.465C284.841 41.1888 283.523 43.3715 281.51 44.959C279.497 46.5464 277.017 47.3402 274.069 47.3402C271.744 47.3402 269.675 46.8441 267.861 45.8519C266.075 44.8598 264.672 43.4424 263.651 41.5998C262.659 39.7572 262.163 37.6028 262.163 35.1366ZM303.939 23.018C306.66 23.018 308.843 23.9252 310.487 25.7394C312.131 27.5253 312.953 29.9915 312.953 33.1381V47H305.725V34.1161C305.725 32.5286 305.314 31.2955 304.492 30.4167C303.669 29.538 302.564 29.0986 301.175 29.0986C299.786 29.0986 298.68 29.538 297.858 30.4167C297.036 31.2955 296.625 32.5286 296.625 34.1161V47H289.354V15.5343H296.625V26.4622C297.362 25.4134 298.368 24.5771 299.644 23.9535C300.92 23.3299 302.351 23.018 303.939 23.018Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3589 30.6229L22.8976 34.7877C24.5396 35.5893 24.2865 38.0041 22.5129 38.4462L13.2958 40.7446C12.1466 41.0314 11.0109 40.2383 10.8759 39.0604C10.5918 36.5979 10.8546 34.103 11.6454 31.7536C11.7346 31.4901 11.879 31.2487 12.0689 31.0455C12.2587 30.8422 12.4898 30.6817 12.7465 30.5747C13.0033 30.4678 13.2799 30.4167 13.5579 30.425C13.8359 30.4333 14.109 30.5008 14.3589 30.6229ZM17.7778 48.1999L24.1329 41.1411C25.3546 39.7827 27.6075 40.6939 27.5416 42.5198L27.2109 52.0154C27.2011 52.2942 27.1318 52.5677 27.0078 52.8176C26.8837 53.0675 26.7077 53.288 26.4915 53.4644C26.2754 53.6407 26.024 53.7689 25.7544 53.8403C25.4847 53.9117 25.2028 53.9247 24.9277 53.8784C22.4857 53.4668 20.163 52.5269 18.122 51.1244C17.8923 50.9664 17.6989 50.7612 17.5549 50.5225C17.4109 50.2838 17.3196 50.0171 17.287 49.7402C17.2544 49.4633 17.2813 49.1827 17.3659 48.917C17.4506 48.6514 17.591 48.4069 17.7778 48.1999ZM32.8455 38.8073L41.8786 41.7436C43.0025 42.1081 43.551 43.3804 43.043 44.4469C41.9766 46.6822 40.4349 48.6576 38.5256 50.2351C38.3104 50.4128 38.0598 50.5425 37.7905 50.6155C37.5211 50.6885 37.2393 50.7031 36.9638 50.6584C36.6884 50.6136 36.4257 50.5106 36.1933 50.3561C35.9609 50.2016 35.7642 49.9992 35.6163 49.7626L30.5808 41.7048C29.6122 40.1556 31.1073 38.242 32.8455 38.8073ZM42.0322 33.0445L32.9011 35.6635C31.1445 36.1664 29.7168 34.2021 30.7378 32.6868L36.0517 24.8112C36.207 24.5806 36.4097 24.3857 36.6462 24.2396C36.8828 24.0934 37.1477 23.9993 37.4234 23.9636C37.6992 23.9278 37.9794 23.9512 38.2453 24.0322C38.5113 24.1131 38.757 24.2499 38.966 24.4332C40.8257 26.0725 42.3007 28.1018 43.286 30.3766C43.3976 30.6323 43.4533 30.909 43.4493 31.188C43.4454 31.467 43.382 31.742 43.2633 31.9945C43.1446 32.247 42.9734 32.4713 42.7611 32.6524C42.5488 32.8335 42.3003 32.9672 42.0322 33.0445ZM20.6955 10.8876C19.0518 11.3264 17.4841 11.9086 16.0008 12.6156C15.7576 12.7324 15.5411 12.8981 15.365 13.1025C15.1888 13.3069 15.0568 13.5455 14.9773 13.8033C14.8977 14.0611 14.8724 14.3326 14.9027 14.6007C14.9331 14.8688 15.0185 15.1277 15.1537 15.3612L24.0789 30.8187C25.0796 32.5534 27.7306 31.843 27.7306 29.8399V11.9913C27.731 11.7215 27.6755 11.4546 27.5678 11.2073C27.46 10.9599 27.3024 10.7375 27.1046 10.5541C26.9068 10.3706 26.6733 10.2299 26.4186 10.141C26.164 10.052 25.8936 10.0167 25.6246 10.0371C23.9878 10.1671 22.3391 10.4472 20.6955 10.8876Z" fill="black"/>
            </svg>
            <div className="nav-link-container">
            <NavLink to={"/client-shortlist"} style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: "black",
      padding:"1rem",
      fontSize:"1.4rem"
    };
  }}>ShortList</NavLink>

            <NavLink to={"/chat"} style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color:"black",
      padding:"1rem",
      fontSize:"1.4rem"
    
    };}}>Conversations</NavLink>
            <NavLink to={"/client-overview"} style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color:"black",
      padding:"1rem",
      fontSize:"1.4rem"
    
    };}}>Conversations</NavLink>
            </div>

        </nav>
    )
}