// import logo from './logo.svg';
// import {lazy,Suspense} from "react";
// import { Provider } from "react-redux";
// import store from "./ReactRedux/Store";
import UseLAYOUTEFFECT from "./UseLAYOUTEFFECT/UseLAYOUTEFFECT";
import UseReducer from "./UseReducer/UseReducer";








// const LaptopContainer = lazy(()=>import  ( "./ReactRedux/Laptop/LaptopContainer"));
// const MobileContainer =lazy(()=>import  ("./ReactRedux/MOBILE/MobileContainer"));

// import Parent from "./Childtoparent/Parent";
// import ChildtoParentDatapass from "./ChildtoParentDatapass/ChildtoParentDatapass";
// import HigherOrderComponent from "./HigherOrderComponent/HigherOrderComponent";

//  import Purecomponent from "./Purecomponent/Purecomponent";
// import RenderWithoutIdRoot, { RenderWithoutIdRoot2 } from "./RenderWithoutIdRoot/RenderWithoutIdRoot";



// import AntDesign from "./AntDesign/AntDesign";
// import FontAwesome from "./FontAwesome/FontAwesome";
// import MaterialUi from "./MaterialUi/MaterialUi";
// import Popup from "./MaterialUi/Popup";
// import Progressbar from "./MaterialUi/Progressbar";
// import SematicUi from "./SematicUi/SematicUi";

// import Routing from "./UseParams/Routing";
// import Useparams from "./UseParams/Useparams";

// import UseRef from "./UseRef/UseRef";
// import UseContextHook from './UseContextHook/UseContextHook'
// import CustomHook from "./CustomHook/CustomHook";
// import UseMemo from "./UseMemo/UseMemo";

// import FontAwesome from "./AxiosApi/FontAwesome";
// import Delete from "./AxiosApi/FunctionApi/Delete";

// import UseState from "./FunctionComponent/useState";
// import Get from "./AxiosApi/FunctionApi/Get";
// import Post from "./AxiosApi/FunctionApi/Post";
// import Update from "./AxiosApi/FunctionApi/Update";
// import UseStatte from "./FunctionComponent/UseStatte";

// import { AnanomousComponent } from './AnanomousComponent/AnanomousComponent';

// import './App.css';
// import AddEmployee from './AxiosApi/AddEmployee';
// import ApiAxios from './AxiosApi/ApiAxios';
// import DeleteStudent from './AxiosApi/DeleteStudent';
// import All from './AxiosApi/All';


// import UpdateStudent from './AxiosApi/UpdateStudent';
// import FakeApi from './AxiosApi/FakeApi';
// import Unmounting from './classcompLifeCycle/Unmounting';
// import ClassRender from './classcompLifeCycle/ClassRender';
// import UpdatingLifecycleClasscomp from './classcompLifeCycle/UpdatingLifecycleClasscomp';


// import Bootstrap from './Bootstrap/Bootstrap';
// import ConditionalRendering from './ClassComponent/ConditionalRendering/ConditionalRendering';
// import ConditionalSwitchcase from './ClassComponent/ConditionalRendering/ConditionalSwitchcase';
// import Conditionop from './ClassComponent/ConditionalRendering/Conditionop';
// import FunctionConditionalRenderingSwitch from './FunctionComponent/FunctionConditionalRendering/FunctionConditionalRenderingSwitch';
// import FunctionConditionalRenderingcooperator from './FunctionComponent/FunctionConditionalRendering/FunctionConditionalRenderingcooperator';
// import { FunctionConditionalRenderingif } from './FunctionComponent/FunctionConditionalRendering/FunctionConditionalRenderingif';

// import ClassComponentAssignment from './PropsAssignment/ClassComponentAssignment/ClassComponentAssignment';
// import ClassComponentProps from './PropsAssignment/ClassComponentAssignment/ClassComponentProps';
// import Mapofdata from './PropsAssignment/ClassComponentAssignment/Mapofdata';
// import { MapofFunctiondata } from './PropsAssignment/FunctionMapofdata/MapofFunctiondata';


// import ClassComponent from './ClassComponent/ClassComponent';
//  import AppImage from './PropsAssignment/AppImage';
// import PropsAssignment from './PropsAssignment/PropsAssignment';
// import ReactRouterDomApp from './PropsAssignment/ReactRouterDomApp/ReactRouterDomApp';
//  import image from './PropsAssignment/WhatsApp Image 2024-06-12 at 22.01.14_341b5802.jpg'
// import Internalsty from './stylinginReact/Internalsty';
// // import ArrowComponent from './ArrowFunctionComponent/ArrowComponent';
// import Functioncomponentex1 from './FunctionComponent/Functioncomponentex1';
// import Props from './Props/Props';
// import img from './PropsAssignment/WhatsApp Image 2024-06-12 at 22.01.14_341b5802.jpg'
 


function App() {

  
//   const greet=(prop)=>{
//     alert("welcome"+prop)
// }


  return (
    //  <div   style={{backgroundColor:"yellow",width:"100%",textAlign:"center"}} className='aqw'>
    <div >
   {/* <h1 style={{color:"red"}}>hello welcome to react</h1>
   <Functioncomponentex1></Functioncomponentex1>
   <ArrowComponent></ArrowComponent>
<AnanomousComponent></AnanomousComponent>
<Props name="naveen" age="25"></Props> */}
 {/* <PropsAssignment name="SaiDeep" rating="5" Likes="100k" url={image}></PropsAssignment>
<PropsAssignment name="Munna" rating="4.9" Likes="200k" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkro4L_m2D9jS9MEfdUCetey69jmoOw44Ow&s"></PropsAssignment>
<PropsAssignment name="Robo"   rating="4.7" Likes="90k" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ747r2VZSSLF7nx-BcpuqF7QcirVGojs6pXg&s"></PropsAssignment>
<PropsAssignment name="Osaravalli" rating="4.8" Likes="150k" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2PcBB-GC0Dm4anL3xIzdhm1zlbldokmEGQ&s"></PropsAssignment>
<PropsAssignment name="Mirchi" rating="4.9" Likes="500k" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1bnEnXLZE8YYB3n17Ney3gPX9KrlbGtrXw&s"></PropsAssignment>
<PropsAssignment name="Bahubali" rating="5" Likes="1000k" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA7f0ICnqcgqwMPOWQS57weKJJM-ST9Y-fuw&s"></PropsAssignment>
<PropsAssignment name="Chakram" rating="4.9" Likes="600k" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDLJPv5anWy8-Qm_EPjv6dSLnYfYapHBFaA&s"></PropsAssignment>
<PropsAssignment name="radhashayam" rating="4.0" Likes="50k" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0I7eOwghlaEmDrlA2pay3cTsi7NZsIV7YA&s"></PropsAssignment>
<PropsAssignment name="Darling" rating="5" Likes="1000k" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD52iT6bVPB0GKdsS-A8x_ExmjzCgLYP8KMQ&s"></PropsAssignment>
<PropsAssignment name="Bujjigadu" rating="3.9" Likes="100k" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToetrNskYiOCv_YnG4gMJHCRomtjPhcw7HOQ&s"></PropsAssignment>
<PropsAssignment name="Pournami" rating="5" Likes="1000k" url="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDpkLVQF7FgrM_oiR0EGfMprJhGIByornVAgimqxAK6jimsDll_QnhTz-lhN2YhvYhp1NDg_YZ38yiSdYTa0C-KG9jvwJtZRU6VFiTj8M"></PropsAssignment>
<PropsAssignment name="Chatrapathi" rating="5" Likes="1000k" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQc9Ny85aRDBXfCiNO2xirKZRGZSofwir3Q&s"></PropsAssignment> */}

{/* <AppImage></AppImage>  */}

{/* <ClassComponent name="naveen"></ClassComponent>
<ClassComponent name="Abhi"></ClassComponent> */}

{/* <ClassComponentAssignment></ClassComponentAssignment>
<ClassComponentProps url="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80" name="tata" rating="5" Likes="100k"></ClassComponentProps>
<ClassComponentProps url="https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg" name="Kia" rating="5" Likes="100k"></ClassComponentProps>
<ClassComponentProps url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXk0dhQV26XltjOASKr2EGwjWLjUCk86UYC95giR6vGoGrSXS9FaLvcrdkg&s" name="Honda" rating="5" Likes="100k"></ClassComponentProps>
<ClassComponentProps url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNR1x6gZwY7XQ2_lQluYlQ0blhoytCLg9dC7IJGoaqkRM57_djcj3fZOlsGxcmV6zCrw&usqp=CAU" name="Shine" rating="5" Likes="100k"></ClassComponentProps>
<ClassComponentProps url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDF0nkhx3_F1jw7s0qoPF_XfnQvi-sqtwoy9JMNSYuczP7jki1gb1aJbBCAw&s" name="BMW" rating="5" Likes="100k"></ClassComponentProps>
<ClassComponentProps url="https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-32.jpeg?isig=0&q=80" name="Mahindra" rating="5" Likes="100k"></ClassComponentProps>
<ClassComponentProps url="https://imgd.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-47.jpeg?isig=0&q=80" name="Suzuki" rating="5" Likes="100k"></ClassComponentProps>
<ClassComponentProps url="https://imgd.aeplcdn.com/370x208/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80" name="ionic" rating="5" Likes="100k"></ClassComponentProps>
<ClassComponentProps url="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww" name="Ford" rating="5" Likes="100k"></ClassComponentProps>
<ClassComponentProps url="https://images.unsplash.com/photo-1494905998402-395d579af36f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D" name="Rolls Roys" rating="5" Likes="100k"></ClassComponentProps>
<ClassComponentProps url="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww"  name="Rolls Roys" rating="5" Likes="100k"></ClassComponentProps>
<ClassComponentProps url="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D" name="Benz" rating="5" Likes="100k"></ClassComponentProps>
<Mapofdata></Mapofdata> */}


{/* <MapofFunctiondata></MapofFunctiondata>
<ConditionalRendering></ConditionalRendering>
<ConditionalSwitchcase></ConditionalSwitchcase>
<Conditionop></Conditionop>
<FunctionConditionalRenderingif></FunctionConditionalRenderingif>
<FunctionConditionalRenderingSwitch></FunctionConditionalRenderingSwitch>
<FunctionConditionalRenderingcooperator></FunctionConditionalRenderingcooperator>


<ReactRouterDomApp></ReactRouterDomApp>
<Bootstrap></Bootstrap>
<Internalsty></Internalsty> */}

{/* <UpdatingLifecycleClasscomp></UpdatingLifecycleClasscomp> */}
{/* <Unmounting></Unmounting> */}
 {/* <ApiAxios></ApiAxios>  */}
 {/* <FakeApi></FakeApi> */}
 {/* <AddEmployee></AddEmployee> */}
 {/* <DeleteStudent></DeleteStudent> */}

 {/* <UpdateStudent></UpdateStudent> */}

{/* <UseStatte></UseStatte> */}

{/* <Get></Get>*/}
{/* <Post></Post> 
<Delete></Delete> */}
{/* <Update></Update> */}
{/* <All></All> */}
{/* 
<UseMemo></UseMemo> */}
{/* <UseRef></UseRef> */}

{/* <UseContextHook></UseContextHook> */}

{/* 
<Routing></Routing> */}
{/* <MaterialUi></MaterialUi>
<Popup></Popup>
<Progressbar></Progressbar>
<Progressbar></Progressbar>
<SematicUi></SematicUi>
<AntDesign></AntDesign>
<FontAwesome></FontAwesome> */}

{/* <h1>Heloo</h1>
<RenderWithoutIdRoot></RenderWithoutIdRoot>
<RenderWithoutIdRoot2></RenderWithoutIdRoot2> */}
{/* <Purecomponent></Purecomponent> */}

{/* <h1>Welcome home page</h1> */}



{/* <ChildtoParentDatapass alert={greet}></ChildtoParentDatapass>
<Parent></Parent> */}
{/* <Provider store={store}>
  <Suspense fallback={<p>Loading......</p>}>
<MobileContainer></MobileContainer>
</Suspense>
<Suspense fallback={<p>Loading......</p>}>
<LaptopContainer></LaptopContainer>
</Suspense>
</Provider> */}
<UseReducer></UseReducer>
<UseLAYOUTEFFECT></UseLAYOUTEFFECT>
   </div>
  );
}

export default App;
