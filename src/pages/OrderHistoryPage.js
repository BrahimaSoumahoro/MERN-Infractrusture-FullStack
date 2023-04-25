import { checkToken } from "../utilities/users-service";


function OrderHistoryPage() {

  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  };

  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>
        Check When My Login Token Expires
      </button>
    </div>
  );
}

export default OrderHistoryPage;


























// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// import { CheckToken } from "../utilities/users-service";


// function OrderHistoryPage() {

//     const handleCheckToken = async () => {
//         const expDate = await CheckToken();
//         console.log(expDate)
//     };

//     return (
//         <div>
//             <h1>OrderHistoryPage</h1>
//             <button onClick={handleCheckToken}>
//                 Check When My Login Token Expired

//             </button>
//         </div>
//     )
// }

// export default OrderHistoryPage;