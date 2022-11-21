import { useSelector } from "react-redux";

function Footer() {
   const categories = useSelector((state) => state.category);

   // console.log(">>Footer Categories", categories);

   let categoriesJsx = [];

   if (categories) {
      categories.map((item, index) => {
         if (index >= 5) {
            return;
         }
         categoriesJsx.push(
            <li class="mb-1" key={index}>
               <a
                  class="link-secondary text-decoration-none"
                  href={`#/catetory/${item.slug}`}
               >
                  {item.name}
               </a>
            </li>
         );
      });
   } else {
      categoriesJsx = (
         <li className="mb-1" key={1}>
            <strong>Loading...</strong>
         </li>
      );
   }

   return (
      <footer class="pt-4 my-md-5 pt-md-5 border-top">
         <div class="row">
            <div class="col-6 col-md">
               <h5>Features</h5>
               <ul class="list-unstyled text-small">
                  <li class="mb-1">
                     <a class="link-secondary text-decoration-none" href="#">
                        Cool stuff
                     </a>
                  </li>
                  <li class="mb-1">
                     <a class="link-secondary text-decoration-none" href="#">
                        Random feature
                     </a>
                  </li>
                  <li class="mb-1">
                     <a class="link-secondary text-decoration-none" href="#">
                        Team feature
                     </a>
                  </li>
                  <li class="mb-1">
                     <a class="link-secondary text-decoration-none" href="#">
                        Stuff for developers
                     </a>
                  </li>
                  <li class="mb-1">
                     <a class="link-secondary text-decoration-none" href="#">
                        Another one
                     </a>
                  </li>
                  <li class="mb-1">
                     <a class="link-secondary text-decoration-none" href="#">
                        Last time
                     </a>
                  </li>
               </ul>
            </div>
            <div class="col-6 col-md">
               <h5>Kategoriler</h5>
               <ul class="list-unstyled text-small">{categoriesJsx}</ul>
            </div>
            <div class="col-6 col-md">
               <h5>About</h5>
               <ul class="list-unstyled text-small">
                  <li class="mb-1">
                     <a class="link-secondary text-decoration-none" href="#">
                        Team
                     </a>
                  </li>
                  <li class="mb-1">
                     <a class="link-secondary text-decoration-none" href="#">
                        Locations
                     </a>
                  </li>
                  <li class="mb-1">
                     <a class="link-secondary text-decoration-none" href="#">
                        Privacy
                     </a>
                  </li>
                  <li class="mb-1">
                     <a class="link-secondary text-decoration-none" href="#">
                        Terms
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
