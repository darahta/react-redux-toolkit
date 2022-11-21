import React from "react";

function CategoryBox(props) {
   return (
      <div>
         <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
               <div class="card-header py-3 text-bg-primary border-primary">
                  <h4 class="my-0 fw-normal">{props.name}</h4>
               </div>
               <div class="card-body">
                  <img
                     src={props.image}
                     style={{ width: "100%", margin: "15px" }}
                  />
                  <a
                     href={`#/category/${props.slug}`}
                     class="w-100 btn btn-lg btn-primary"
                  >
                     Details
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CategoryBox;
