(()=>{const e=new THREE.Scene,n=new THREE.Group,i=new THREE.BoxGeometry(1,1,1),o=new THREE.MeshBasicMaterial({color:"purple"}),t=new THREE.Mesh(i,o),E=new THREE.MeshBasicMaterial({color:"green"}),r=new THREE.Mesh(i,E);r.position.y=2,n.add(t,r),n.position.x=1,e.add(n);const s=new THREE.AxesHelper(4);e.add(s);const w={width:window.innerWidth,height:window.innerHeight},d=new THREE.PerspectiveCamera(75,w.width/w.height);d.position.z=3,d.position.x=1,d.position.y=1,e.add(d);const a=document.querySelector(".draw"),c=new THREE.WebGLRenderer({canvas:a});c.setSize(w.width,w.height);const h=new THREE.Clock,H=()=>{h.getElapsedTime(),c.render(e,d),window.requestAnimationFrame(H)};H()})();