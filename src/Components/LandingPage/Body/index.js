import React from 'react'
import {FaBars} from 'react-icons/fa'
import Login from '../../Login/login';

import {
    Nav, 
    Navbarcontainer, 
    NavMenu,
    NavItem,
    NavLinks,
    Neck,
    NeckContainer,
    NeckMenu,
    NeckItem,
    NeckLinks,
    Necklogo,
    MobileIcon,
    IconContainer,Div,Rone,BoxContainer,Text,LoginButton} from './bodyElement';

const Body = () => {

        return (
        <>
         <Nav>
          <Navbarcontainer>
                          
              <NavMenu>

                  <NavItem>
                      <NavLinks to = "home"> Features </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to = "about"> Pricing </NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to = "dashboard"> FAQs</NavLinks>
                  </NavItem>

                  <NavItem>
                      <NavLinks to = "/login"> Get paid to test</NavLinks>
                  </NavItem>


              </NavMenu>

            </Navbarcontainer>
        </Nav>

        <Neck>

           <NeckContainer>

             <Necklogo to="/"> Domble
             </Necklogo>

             <MobileIcon> 
                  <FaBars/>
              </MobileIcon>

             <NeckMenu>

                  <NeckItem >       
                <IconContainer>
                  <svg width="40" height="40" viewBox="0 0 90 87 " fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M47.7769 34.5245C47.6944 34.3686 48.6094 34.2889 48.7744 34.2889C48.9544 34.307 48.2981 35.3438 47.7769 34.5245ZM42.5644 27.3253L42.8269 27.2528L42.7031 27.5681C42.9131 27.9342 42.7556 28.1517 42.7219 28.3439L42.3619 28.565C42.2344 28.7173 42.9881 28.739 42.9956 28.7644C43.0257 28.8405 42.0844 28.9746 42.2606 29.1667C42.4931 29.4857 44.2556 28.71 43.9781 28.7535C44.5219 28.4889 44.0531 28.4599 43.7456 28.304C43.6406 27.8001 43.5506 27.0208 43.2244 26.7126L43.4419 26.477C42.9356 25.7738 42.5644 27.3253 42.5644 27.3253ZM75.0019 43.5C75.0019 59.5153 61.5694 72.5 45.0019 72.5C28.4344 72.5 15.0019 59.5153 15.0019 43.5C15.0019 27.4847 28.4344 14.5 45.0019 14.5C61.5694 14.5 75.0019 27.4847 75.0019 43.5ZM53.9569 30.9104C53.9456 30.566 53.4957 30.2434 53.0344 30.8342C52.7081 31.2402 52.7644 31.8638 52.5844 32.1392C52.3331 32.5525 53.9644 32.9368 53.9644 32.5489C54.0281 31.9 55.7381 32.4003 56.0719 32.4909C56.6719 32.654 57.6319 31.9616 56.5856 31.5991C55.7194 31.2983 55.2656 30.972 55.1906 30.3775C55.1906 30.3775 55.6444 29.9642 55.4456 29.9896C54.9169 30.0476 53.9569 31.8275 53.9569 30.9104ZM69.2269 43.5C69.2269 41.0749 68.7994 38.6244 68.3606 37.3303C68.2219 36.9243 67.8994 36.598 67.4906 36.4457C66.8681 36.2137 64.2469 37.845 63.8494 37.0403L62.4656 37.0584C62.1731 36.9025 61.3669 35.8512 60.9919 35.9817C60.2494 36.2427 62.1431 38.2437 62.6606 38.5047C63.1519 38.1459 64.7232 37.4136 65.0644 38.4141C65.7169 40.3027 63.2757 42.3618 62.0344 43.4529C60.1706 45.0805 60.5156 42.398 59.2481 41.4555C58.5806 40.9625 58.5882 39.9076 57.9169 39.5451C57.6169 39.382 56.2406 37.845 56.2481 37.6384L56.2144 38.0262C55.9856 38.193 55.5019 37.3991 55.4494 37.2722C55.4494 37.9646 56.6157 39.0666 56.9944 39.6176C57.6544 40.5674 58.0069 41.9521 58.8056 42.7243C59.2406 43.1448 60.8906 44.8666 61.3181 44.8304L63.5269 43.819C65.0869 44.1779 59.8557 51.3336 59.3606 52.2181C58.9519 52.9613 59.6907 54.7955 59.6306 55.6764C59.5556 56.6914 58.7307 57.0213 57.9544 57.5723C57.1106 58.1631 57.3094 59.3159 56.6007 59.74C55.3482 60.4867 54.4519 62.9119 52.6707 62.901C52.1456 62.901 49.9069 63.7456 49.6069 62.9155C49.3781 62.3174 49.0782 61.8606 48.7556 61.2661C48.4407 60.6861 48.7182 60.0844 48.3394 59.5732C48.0694 59.2144 47.1844 58.406 47.1056 57.9855C47.1019 57.623 47.3869 56.5174 47.7844 56.3252C48.3394 56.0498 47.8932 55.2523 47.8256 54.7882C47.7132 53.9618 47.1806 53.2766 46.5394 52.7945C45.5944 52.0949 46.0856 51.5366 46.3069 50.5361C46.3069 50.0576 46.0069 49.4269 45.3431 49.619C43.9706 50.0033 44.3869 48.5859 43.3894 48.6511C42.6731 48.7019 42.0844 49.1405 41.4206 49.3326C40.5769 49.5755 39.7219 49.1405 38.8932 49.039C35.4806 48.6221 34.3669 44.8521 35.2519 42.1297L35.1394 40.5166C35.5256 39.6901 36.3056 38.7657 36.9881 38.1386C37.3706 37.787 37.8619 37.8776 38.3156 37.6057C39.0131 37.1816 39.0206 36.308 39.6994 35.7751C40.6707 35.0139 41.9944 35.0284 43.2581 34.8652C43.9331 34.7782 46.4981 34.2418 46.9069 34.7239C46.9069 34.8109 47.3681 36.1413 46.8581 36.0651C47.9044 36.1195 49.4044 37.8196 50.3981 37.4245C50.9119 37.2179 50.7281 35.699 51.7744 36.4349C52.4119 36.8771 55.2581 37.0729 55.8506 36.598C56.2181 36.308 56.4169 34.4157 55.9744 34.2055C56.2519 34.4737 54.4856 34.4955 54.3206 34.4339C54.0319 34.3324 53.7619 34.7021 53.2932 34.4955C53.5744 34.6224 51.7294 33.6654 52.7644 32.9295L51.4556 33.1796L51.1444 33.8249C50.4169 34.1838 49.8619 32.5924 49.5844 32.4148C49.3032 32.2335 47.1244 30.7581 47.7169 31.7224L49.6369 33.5639C49.5431 33.6255 49.1306 32.8932 49.1306 33.4261C49.2544 33.1107 49.1832 34.7855 48.8794 34.2381L48.8906 33.611C48.8906 33.4116 48.3431 33.2195 48.2306 33.0818C47.9306 32.7156 47.1244 31.9145 46.6856 31.7224C46.5694 31.668 44.8369 31.929 44.6906 31.9834L44.2556 32.712L43.2394 33.2122L42.8644 34.0388C42.6919 34.1801 41.0044 34.7202 40.9969 34.742C41.0719 34.5644 39.8194 34.3396 39.8981 33.988C39.9919 33.6038 40.4194 32.3966 40.3069 31.9508C40.1906 31.4867 42.9094 32.6177 43.0856 31.3997C43.1569 30.8741 43.1944 30.2579 42.3206 30.1709C42.4931 30.189 44.0081 29.5945 44.2631 29.3263C44.6194 28.9347 45.4331 28.2895 46.0181 28.2895C46.7081 28.2895 46.5581 27.3216 46.8769 26.8504C47.1956 26.9736 46.7044 27.7313 47.0906 28.0394C47.0644 27.8001 48.1707 28.1735 48.2757 28.1155C48.5269 27.9886 49.9331 28.0611 49.7156 27.4231C49.4794 26.7706 49.8394 26.9664 50.1544 26.8286C50.1019 26.8504 50.9794 25.3786 51.1331 25.8608C51.0281 25.3641 50.1131 26.0347 49.7944 26.0094C49.0594 25.9514 49.3669 24.7914 49.6444 24.4506C49.8581 24.1787 49.0594 23.8489 49.0444 24.3673C49.0369 25.1394 48.2944 25.8354 48.4669 26.8612C48.7219 28.4055 46.6782 26.4879 46.5056 26.593C45.8231 26.9881 45.2681 26.0927 45.6206 25.549L47.2031 24.4325C47.4544 24.0156 47.7506 23.5299 48.1369 23.2145C49.4381 22.1596 49.7906 23.0042 51.0844 23.1202C52.3519 23.2326 51.5081 23.4102 51.3394 23.8779C51.1706 24.3274 52.0369 24.4832 52.3331 24.1099C52.5056 23.8924 52.8844 23.3522 53.0532 22.9535C53.2706 22.4351 55.2356 22.4931 53.8631 21.6956C52.9594 21.1736 49.0031 20.1188 46.3556 20.1188C45.7819 20.1188 45.3844 20.735 44.9456 21.0866C44.0831 21.7754 41.8744 23.1348 40.6406 22.7251C39.3844 22.3046 36.6881 24.273 36.2606 24.2839C36.0994 24.2911 36.2606 22.794 37.1231 22.6852C36.7481 22.7396 40.1419 21.0286 40.0519 20.6698C39.9431 20.2493 33.2644 22.5982 33.5644 23.0695C33.7069 23.287 34.2881 23.287 33.5269 23.7582C33.0881 24.012 32.6194 25.636 32.2144 25.636C30.9881 26.1544 30.9019 24.6174 29.5444 26.5966L27.3731 27.4412C24.1519 30.7473 21.9244 34.9341 21.1181 39.5923C21.0881 39.7771 21.9244 40.1215 22.0331 40.2484C22.3031 40.5637 22.3031 41.9159 22.4344 42.3617C22.7719 43.4819 23.6006 44.1054 24.2306 45.124C24.6094 45.7294 25.2244 47.2664 25.0294 47.9044C25.2919 47.4875 27.6244 49.8148 28.0519 50.3005C29.0569 51.4424 29.8331 52.8271 28.1981 53.9545C27.6731 54.3206 28.9969 56.6007 28.3144 57.1626L27.4369 57.3801C26.5781 57.8913 26.9644 59.1491 27.4894 59.682C31.9031 64.1371 38.1169 66.9175 45.0019 66.9175C58.3744 66.9175 69.2269 56.434 69.2269 43.5ZM41.3194 28.5976C41.6231 28.4671 42.0281 28.4744 42.0731 28.0829L42.2644 27.8509C42.3507 27.7276 42.1031 27.5282 42.0056 27.5065L41.6419 27.7494L41.4656 27.7929L41.3006 27.9959L41.3194 28.1083L41.1056 28.3547C40.8994 28.5578 41.1131 28.6846 41.3194 28.5976ZM8.7169 34.5027C3.53065 27.7639 -2.6606 17.777 1.21315 11.3789C2.35315 9.4975 4.8094 7.25 10.0444 7.25C15.2006 7.25 21.4744 9.44313 26.7956 11.8393C24.5306 13.0573 22.4269 14.5036 20.4844 16.1349C16.1231 14.4529 12.5456 13.6119 10.0444 13.6119C9.08815 13.6119 7.4119 13.7387 6.8944 14.5943C6.16315 15.8014 6.48565 19.7925 11.5256 27.2528C10.3331 29.5401 9.3919 31.9689 8.7169 34.5027ZM69.5194 16.1349C72.3619 15.0401 81.5644 12.0423 83.1094 14.5943C84.6244 17.0919 81.1557 23.2399 78.4744 27.2491C79.6707 29.5401 80.6119 31.9689 81.2869 34.5027C86.4694 27.7675 92.6607 17.777 88.7906 11.3825C87.6507 9.4975 85.1944 7.25 79.9594 7.25C74.8069 7.25 68.5331 9.44313 63.2119 11.8393C65.4732 13.0573 67.5807 14.5036 69.5194 16.1349ZM81.2869 52.4972C80.6119 55.0311 79.6707 57.4599 78.4744 59.7509C83.5069 67.2002 83.8444 71.195 83.1094 72.4058C81.5644 74.9614 72.3769 71.949 69.5307 70.8542C67.5807 72.4891 65.4732 73.9427 63.2007 75.1644C68.3982 77.5025 74.7506 79.75 79.9594 79.75C85.1944 79.75 87.6507 77.5025 88.7869 75.6211C92.6944 69.1759 86.3682 59.1093 81.2869 52.4972ZM20.4731 70.8579C17.6269 71.9526 8.4394 74.965 6.8944 72.4094C6.16315 71.1986 6.50065 67.2039 11.5294 59.7545C10.3369 57.4635 9.39565 55.0384 8.72065 52.5045C3.63565 59.1129 -2.68685 69.1831 1.21315 75.6211C2.35315 77.5025 4.8094 79.75 10.0444 79.75C15.2569 79.75 21.6056 77.5025 26.8031 75.168C24.5306 73.9427 22.4231 72.4928 20.4731 70.8579Z" fill="#2B6777"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="90" height="87" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </IconContainer>
                  <NeckLinks to = "/login"> Test Websites </NeckLinks>
                  </NeckItem>
             

                  <NeckItem>
                      <IconContainer>
                  <svg width="40" height="40" viewBox="0 0 90 87 " fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.625 7.25C66.66 7.25 67.5 8.062 67.5 9.0625V77.9375C67.5 78.938 66.66 79.75 65.625 79.75H24.375C23.34 79.75 22.5 78.938 22.5 77.9375V9.0625C22.5 8.062 23.34 7.25 24.375 7.25H65.625ZM75 7.25C75 3.248 71.64 0 67.5 0H22.5C18.36 0 15 3.248 15 7.25V79.75C15 83.752 18.36 87 22.5 87H67.5C71.64 87 75 83.752 75 79.75V7.25ZM39.375 10.875H50.625C51.66 10.875 52.5 11.687 52.5 12.6911C52.5 13.688 51.66 14.5 50.625 14.5H39.375C38.3438 14.5 37.5 13.688 37.5 12.6911C37.5 11.687 38.3438 10.875 39.375 10.875ZM45 76.125C42.9263 76.125 41.25 74.501 41.25 72.5C41.25 70.499 42.9263 68.875 45 68.875C47.07 68.875 48.7463 70.499 48.7463 72.5C48.7463 74.501 47.07 76.125 45 76.125ZM63.75 65.25H26.25V18.125H63.75V65.25Z" fill="#2B6777"/>
                    </svg>
                    </IconContainer>
                 <NeckLinks to = "/login"> Test Applications </NeckLinks>
                  </NeckItem>
            

                  <NeckItem>     
                      <IconContainer>
                  <svg width="40" height="40" viewBox="0 0 90 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M89.9998 7.25V87H8.18164V7.25H20.4544C25.4862 7.25 29.3766 3.3205 32.7271 0H65.4544C68.8089 3.3205 72.6994 7.25 77.7271 7.25H89.9998ZM44.9998 10.875C44.9998 12.876 46.8326 14.5 49.0907 14.5C51.353 14.5 53.1816 12.876 53.1816 10.875C53.1816 8.874 51.353 7.25 49.0907 7.25C46.8326 7.25 44.9998 8.874 44.9998 10.875ZM81.818 14.5H65.4544L57.2725 21.75H41.3303L32.7271 14.5H16.3635V79.75H81.818V14.5ZM28.6362 49.7676L32.1339 46.9002C36.2248 48.6548 38.8225 49.9888 43.4248 52.896C52.0689 44.1996 57.788 39.788 68.4039 33.9336L69.5453 36.2536C60.7866 43.0288 54.3721 50.5687 45.1348 65.25C39.4362 59.305 35.6357 55.5133 28.6362 49.7676Z" fill="#2B6777"/>
                    </svg>
                    </IconContainer>
                      <NeckLinks to = "/login"> Review Profiles </NeckLinks>
                  </NeckItem>
                 

              </NeckMenu>
            </NeckContainer>

        </Neck>

        <Div>        
        <Rone>
            <BoxContainer>
                <Text>
                    Take me where <br/> I belong
                </Text>
                <LoginButton >
                Login
                </LoginButton>
            </BoxContainer>
        </Rone>
           
        </Div>
        </>
    );
}

export default Body;
