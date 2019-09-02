import experiment from './base'

const imgBasePath = 'https://res.cloudinary.com/dn1rmdjs5/image/upload/v1566568767/rv/'
const list = ['01_CAT_Shavers','03_boot-sequence','01_welcome','1-A-_KrEvMuiH7dlwshFw5aw','2','1','02_wake-up','yoleo_0003_Yoleo-2','yoleo_2','yoleo_0002_Yoleo-3','yoleo_3','yoleo_4','yoleo_0004_Yoleo-1','yoleo_1','Vincent_van_Gogh_-_Green_Field_-_Google_Art_Project','yoleo_0001_Yoleo-4','yoleo_0000_Yoleo-5','yoleo_0','webpack','wpid-photo-e1410255897752','WPSFBrowser','wood','clients_vodafone','walk2janjina','vf_PDP','vfIDE','voetbalreizen','vf_160712-DEVICE_Page_03a','vf_160712-DEVICE_Page_03b','vangular','vacansoleil7','untitled-2','vacansoleil6','tree-96973_1280','vacansoleil2','vacansoleil1','vacansoleil5','vacansoleil4','vacansoleil0','vacansoleil3','tvprototype_loading','tvprototype_feed','tvprototype_start','tvprototype_leftright','trstenik2drace','treefolder.zip','rv','ZIP','4.13 KB','tinysort','tatarataaII3','Terraformer','tatarataaII2','termux','tatarataaII1','tatarataa4','tatarataa3','tatarataa2','Sus_scrofa_piglet','spiralmap','tatarataa1','Structure_Paris_les_Halles','studio04','studio02','studio01','studio03','soundcircus5','sphere','soundcircus4','soundcircus1','soundcircus3','smorenburg1','soundcircus2','smorenburg3','sketchCylinders','smorenburg2','sketchCube','sl_unb','sl_unb','rv','PNG','891 Bytes','378 × 30','sky','sk123ow','simplexAs4D.rar','rv','RAR','11.67 KB','sfbrowser3','sfbrowser2','Screenshot_2018-03-25-20-58-43','sfbrowser4','simplexAs.rar','rv','RAR','7 KB','sfbrowser','sfbrowser1','seattleIpad4','sfbrowser0','seattleIpad3','seattleIpad2','seattleIpad1','Screenshot_2015-06-03-19-31-03-e1433359905965','Screenshot_2018-03-02-21-27-17','Screenshot_2018-03-25-20-57-20','Screenshot_2018-03-25-20-56-46','Screenshot_2018-03-02-21-30-49','Screenshot_2018-03-02-21-25-31','Screenshot_2018-03-25-20-55-28','Screenshot_2018-03-02-21-24-19','Screenshot_2015-06-03-20-00-12-e1433359959134','schapenII_4','schapenII_3','schapenII_1','schapenII_5','schapenII_2','schapen3','schapen2','schapen4','schapen0','schapen1','schapen','Satriun-Corporate-Performance-Management','particleemitter.zip','rv','ZIP','3.3 MB','Satriun-Our-vision','ronvalstar.nl_','rekentuin','red','clients_randstad','radialdifference-1','qrsRonvalstar','qrsRonvalstar','rv','PNG','421 Bytes','155 × 155','purple','prizes_webby','prizes_fwa','prizes_adcn','pixels','pp','primitives','pocket-masthead','PhilipsSpotify.png','pi','pixelfabrics2','pixelfabrics3','pixelfabrics1','Philips-GEZICHT-Scheerapparaten-e1437373862527','perlincomparison.rar','rv','RAR','42.73 KB','Philips-Consumenten-producten-e1437373928995','perlinAndSimplex.rar','rv','RAR','13.4 KB','philips','PDP_CRP_overview_v1','perlinnoise.zip','rv','ZIP','16.41 KB','PDP_CRP_reviews_v1','pano3','pano4','pano2','pano1','pano0','omewillem3','Opleidingen-Widget','omewillem1','omewillem2','omewillem0','omewillem','novartis2','novartis5','novartis3','novartis4','noiseTiling.zip','rv','ZIP','111.13 KB','Lorenz-84-52','novartis1','noiseCubeMap','noiseSpherical','noiseTileable','noiseCubeMap3D1','noiseCylindrical','noiseCubeMap3D','MYOS_Karly','noiseCircle','Lorenz-84-57','newcolt4','newcolt3','noise','MYOS_home','newcolt2','newcolt1','newcolt','newcolt0','MYOS_Karly_mobile','micromint','metenIsWeten','microleaf','me','Lorenz84-12700-04809-11237-03526-02731','Lorenz-4600-18500-600-3-4000','marbles','Lorenz84-1235-655-946-484-356','Lorenz84-1235-683-864-484-356','Lorenz84-225-2391-2665-1236-48','lorenz84-1115-479-974-530-336_copy0','Lorenz-84-31','lorenz84-1115-479-974-530-336','Lorenz84-225-2391-2665-1218-48-11','Lorenz84-225-2391-2665-1218-48-1','lineLoop','Latoocarfian-2304-2991-856-4738-3673-4877','line','L84','logo_s1','logo_s','kosmonaut3','kosmonaut2','kosmonaut1','kosmonaut4','kosmonaut0','kosmonaut','knottywood','kleurenspeuren4','kleurenspeuren5','kleurenspeuren2','kleurenspeuren3','kleurenspeuren1','kleurenspeuren','keizerrijk-1','kleurenspeuren0','keizerrijk','kees5','keesfwa','kees3','kees','kees4','kees1','kees2','jurida1','kees0','jurida5','kakebeeke3','jurida4','jurida3','kakebeeke2','jurida2','kakebeeke1','jurida0','jsnoise-sjeiti','jurida','jsnoise-slimeland','jsnoise-firefox','jsnoise-processingJs','jsnoise-opera','jsnoise-safari','jsnoise-perlincomparison.rar','rv','RAR','42.73 KB','jsnoise-lonelypinkelephantsX','jsnoise-lonelypinkelephants','jsnoise-chrome','ill_nherengrachtalt','jsnoise-classicVsSimplex','ill_schelp','jsnoise-bankseanClassical','ill_kleurenspeuren','jsnoise-bankseanSimplex','ill_lorenz','ill_kapoentjes','ill_jennifer','ill_gtp','HSO-App-students','HSO-App-week-1','ill_frobfrob','HSO-App-student','ill_cova','HSO-App-profile','Edvard_Munch_-_Inheritance_-_Google_Art_Project1','HSO-App-mobile-week-1','HSO-App-settings','HSO-App-overview','Helder','HSO-App-mobile-login','Experiment-glass-Ron-Valstar-8','HSO-App-mobile-menu','HSO-App-mobile-group-tasks','hours','Hans-Reinerie-Photography-3','headerLogo','Hans-Reinerie-Photography-1','gridrng','gridrng','rv','PNG','601 Bytes','200 × 160','Hans-Reinerie-Photography-2','gtp-ill','gridmodulus','gridfloored','gridfloored','rv','PNG','630 Bytes','200 × 160','greentoday3','Drought-e1408008972471','greentoday2','greentoday1','greentoday0','git-icon','foobarbaz.zip','rv','ZIP','2.7 KB','fnd','fire','fire','rv','JPG','422 Bytes','256 × 1','ello-optimized-6269606d-1','fcwalvisch','ffpreview_preview1','elephant','dustin2','dustin4','dustin3','dustin1','De-Philips-SHAVER-Series-9000-SensoTouch-Scheerapparaat-voor-nat-droog-scheren-RQ1275-16-Scheerapparaat-voor-nat-droog-scheren-kopen-e1437373812808','diagram_1-1','diagramcircleline.txt','rv','TXT','2.75 KB','del','DEC_Grid_Latest_small_banner','Curiculum-Vitae-_-Ron-Valstar-_-front-end-developer','deepred3','deepred2','deepred1','DEC_Compare_Page_v1','crystal1','crystal0','Clipboard35','clouds','Clipboard01','Clipboard011','Clifford3D-1111-1293-4665-2408-3651-2627','clients_sikkens','clients_uva','clients_tddb','clients_2x4','clients_bia','clients_resn','clients_novartis','clients_72','clients_philips','classicVsSimplex','chocolatl2','chocolatl1','chocolatl3','20141111_130028','budlight_1','attractorLorenz84_1','budlight_6','budlight_4','budlight_5','budlight_3','budlight_2','blob','bookmarklet.rar','rv','RAR','2.41 KB','blauweplaneet','blauweplaneet3','blauweplaneet4','blauweplaneet2','attractors00','blauweplaneet0','blauweplaneet1','attractors02','blackfun1','blackjack','blackfun','attractors01','baard','attractorDeJong','attractorLorenz','attractor','allerhande71','Artboard-1','amm1','allerhande31','amfphp_as3.zip','rv','ZIP','1.73 KB','allerhande51','allerhande61','allerhande41','allerhande6','allerhande21','allerhande11','12723551','allerhande2','allerhande7','11054398564_d0001f56ff_b','allerhande5','allerhande4','allerhande3','allerhande1','allerhande01','5410177218_d28d7c8f42_o','allerhande0','7050027543_c352248fc7_b','140102-N-PL185-099','5572829236_cc13d5e471_o','6788949859_4f4efbe244_o','5411825070_3eb14f3130_o','10599605_936299733064994_595747535533991474_n','09_PDP_Coffee','800px-Binary_Code','8145-v1','404','06_glitches','2007','05_medisch-rapport','5','03_PDP_Shavers','3','4','04_video']
const getImg = ()=>{
	const index = Math.random()*list.length<<0
	return imgBasePath+list[index]+'.jpg'
}

let inst = experiment('vertical',{
				init
				,exit
				,handleAnimate
				,handleResize
		})
		,zuper = inst.zuper
	//
	// private variables
	,w,h,hMax
	,target
	//
	,canvas
	,context
	//
	,patternCanvas
	,patternContext
	//
	,img
	,imgTemp
	,imgPreview
	,imgPreviewUri
	,feedback
	,margin = 8
	,millisOffset = 0
	,millisScale = 0.01
	,switchMillLst = 0
	,switchMillCnt = 0

function init(_target){
	target = _target
	canvas = zuper.init(_target)
	context = inst.context
	//
	patternCanvas = document.createElement('canvas')
	patternContext = patternCanvas.getContext('2d')
	//
	handleResize()
	//
	canvas.addEventListener('click',loadImage,true)
	//
	imgPreview = document.createElement('img')
	imgPreview.setAttribute('style','position:absolute;top:0;left:0;width:10%;display:none;')
	target.appendChild(imgPreview)
	//
	imgPreviewUri = document.createElement('code')
	imgPreviewUri.setAttribute('style','position:absolute;bottom:0;left:0;font:bold 12px Arial;color:white;text-shadow:0 0 2px #000;display:none;')
	target.appendChild(imgPreviewUri)
	//
	feedback = document.createElement('p')
	Object.assign(feedback.style,{
		position:'absolute'
		,bottom:'5px'
		,left:'0'
		,display:'none'
		,width:'100%'
		,textAlign:'left'
		,font:'bold 12px Arial'
		,color:'white'
		,textShadow:'0 0 2px #000'
	})
	feedback.innerText = 'loading google jsapi'
	target.appendChild(feedback)
	//
	loadImage()
	//
	return canvas
}

function exit(){
	zuper.exit()
	target.removeChild(imgPreview)
	target.removeChild(imgPreviewUri)
	target.removeChild(feedback)
	canvas.removeEventListener('click',loadImage,true)
}

// protected methods

function handleAnimate(deltaT,millis){
	if (img) {
		millis -= millisOffset
		canvas.width = w
		context.fillStyle = '#f00'
		context.fillRect(0,0,10,10)
		let iMaxH = hMax-margin
			,iMil = millisScale*millis<<0
			,iMill = iMil%iMaxH
			,iOff = iMaxH-Math.abs(2*iMill-iMaxH)
			,sx = 1
			,sy = 0

		switchMillCnt += iMil-switchMillLst
		switchMillLst = iMil
		if (switchMillCnt>0.45*iMaxH) {
			switchMillCnt = 0
			loadImage()
		}
		//
		context.save()
		context.globalCompositeOperation = 'source-over'
		context.transform(1,sy,sx,1,0,0)
		context.drawImage(patternCanvas,0,iOff,w,margin,-h,0,w + h,h)
		context.restore()
		//
		context.globalCompositeOperation = 'lighter'
		sx = -1
		context.transform(1,sy,sx,1,0,0)
		context.drawImage(patternCanvas,0,iOff,w,margin,0,0,w + h,h)
	}
}

function handleResize(){
	zuper.handleResize()
	w = inst.w
	h = inst.h
	hMax = h
	patternCanvas.width = w
	patternCanvas.height = hMax
	if (img) {
		buildPattern()
	}
}

// private methods

function loadImage() {
	feedback.innerText = 'loading image'
	if (!img) {
		imgTemp = document.createElement('img')
		imgTemp.setAttribute('crossOrigin', 'anonymous')
	}
	imgTemp.addEventListener('load',handleImageLoad,false)
	imgTemp.addEventListener('error',handleImageError,false)
	imgTemp.setAttribute('src', getImg())
}

function handleImageError(){
	loadImage()
	imgTemp.removeEventListener('error',handleImageError)
}

function handleImageLoad(){
	img = imgTemp
	//
	buildPattern()
	//
	let sSrc = img.getAttribute('src')
	imgPreview.setAttribute('src', sSrc)
	imgPreviewUri.innerHTML = sSrc
	feedback.innerText = ''
	//
	switchMillLst = 0
	switchMillCnt = 0
	millisOffset = Date.now()
	//
	imgTemp.removeEventListener('load',handleImageLoad)
}

function buildPattern(){
	patternCanvas.width = w
	patternContext.fillStyle = 'rgba(0,0,0,.3)'
	patternContext.drawImage(img,0,0,img.width,img.height,0,0,w,hMax)
	patternContext.rect(0,0,w,h)
	patternContext.fill()
}

export default inst.expose