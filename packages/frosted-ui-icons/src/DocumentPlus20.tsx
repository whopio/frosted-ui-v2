import * as React from 'react';
import { IconProps } from './types';

export const DocumentPlus20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M5.15625 3.5C4.18975 3.5 3.40625 4.2835 3.40625 5.25V14.8125C3.40625 15.779 4.18968 16.5625 5.15613 16.5625H5.16802H5.17991H5.1918H5.2037H5.2156H5.22749H5.2394H5.2513H5.2632H5.27511H5.28702H5.29893H5.31084H5.32275H5.33466H5.34658H5.3585H5.37042H5.38234H5.39426H5.40619H5.41811H5.43004H5.44197H5.4539H5.46583H5.47777H5.4897H5.50164H5.51358H5.52552H5.53746H5.5494H5.56135H5.57329H5.58524H5.59719H5.60914H5.62109H5.63305H5.645H5.65696H5.66891H5.68087H5.69283H5.70479H5.71675H5.72872H5.74068H5.75265H5.76462H5.77659H5.78856H5.80053H5.8125H5.82447H5.83645H5.84842H5.8604H5.87238H5.88436H5.89634H5.90832H5.9203H5.93228H5.94427H5.95625H5.96824H5.98023H5.99222H6.00421H6.0162H6.02819H6.04018H6.05217H6.06417H6.07616H6.08816H6.10016H6.11216H6.12415H6.13615H6.14815H6.16016H6.17216H6.18416H6.19617H6.20817H6.22017H6.23218H6.24419H6.2562H6.2682H6.28021H6.29222H6.30423H6.31624H6.32825H6.34027H6.35228H6.36429H6.37631H6.38832H6.40034H6.41235H6.42437H6.43639H6.4484H6.46042H6.47244H6.48446H6.49648H6.5085H6.52052H6.53254H6.54456H6.55658H6.5686H6.58063H6.59265H6.60467H6.61669H6.62872H6.64074H6.65277H6.66479H6.67682H6.68884H6.70087H6.71289H6.72492H6.73694H6.74897H6.761H6.77302H6.78505H6.79708H6.8091H6.82113H6.83316H6.84519H6.85721H6.86924H6.88127H6.8933H6.90532H6.91735H6.92938H6.94141H6.95344H6.96546H6.97749H6.98952H7.00155H7.01357H7.0256H7.03763H7.04966H7.06168H7.07371H7.08574H7.09776H7.10979H7.12182H7.13384H7.14587H7.15789H7.16992H7.18194H7.19397H7.20599H7.21802H7.23004H7.24207H7.25409H7.26611H7.27814H7.29016H7.30218H7.3142H7.32622H7.33824H7.35026H7.36228H7.3743H7.38632H7.39834H7.41036H7.42238H7.43439H7.44641H7.45843H7.47044H7.48246H7.49447H7.50648H7.5185H7.53051H7.54252H7.55453H7.56654H7.57855H7.59056H7.60257H7.61458H7.62658H7.63859H7.6506H7.6626H7.6746H7.68661H7.69861H7.71061H7.72261H7.73461H7.74661H7.75861H7.77061H7.7826H7.7946H7.80659H7.81859H7.83058H7.84257H7.85456H7.86655H7.87854H7.89053H7.90252H7.9145H7.92649H7.93847H7.95045H7.96244H7.97442H7.9864H7.99837H8.01035H8.02233H8.0343H8.04628H8.05825H8.07022H8.08219H8.09416H8.10613H8.11809H8.13006H8.14202H8.15399H8.16595H8.17791H8.18987H8.20182H8.21378H8.22573H8.23769H8.24964H8.26159H8.27354H8.28549H8.29743H8.30938H8.32132H8.33326H8.3452H8.35714H8.36908H8.38102H8.39295H8.40488H8.41682H8.42874H8.44067H8.4526H8.46452H8.47645H8.48837H8.50029H8.51221H8.52413H8.53604H8.54795H8.55987H8.57178H8.58368H8.59559H8.60749H8.6194H8.6313H8.6432H8.6551H8.66699H8.67889H8.69078H8.70267H8.71456H8.72644H8.73833H8.75021H8.76209H8.77397H8.78585H8.79772H8.80959H8.82146H8.83333H8.8452H8.85706H8.86893H8.88079H8.89265H8.9045H8.91636H8.92821H8.94006H8.95191H8.96376H8.9756H8.98744H8.99928H9.01112H9.02295H9.03479H9.04662H9.05844H9.07027H9.08209H9.09392H9.10574H9.11755H9.12937H9.14118H9.15299H9.1648H9.1766H9.18841H9.20021H9.212H9.2238H9.23559H9.24738H9.25917H9.27096H9.28274H9.29452H9.3063H9.31808H9.32985H9.34162H9.35339H9.36516H9.37692H9.38868H9.40044H9.41219H9.42394H9.4357H9.44744H9.45919H9.47093H9.48267H9.4944H9.50614H9.51787H9.5296H9.54132H9.55305H9.56477H9.57648H9.5882H9.59991H9.61162H9.62332H9.63503H9.64673H9.65843H9.67012H9.68181H9.6935H9.70519H9.71687H9.72855H9.74022H9.7519H9.76357H9.77524H9.7869H9.79856H9.81022H9.82188H9.83353H9.84518H9.85682H9.86847H9.88011H9.89175H9.90338H9.91501H9.92664H9.93826H9.94988H9.9615H9.97311H9.98472H9.99633H10.0079H10.0195H10.0311H10.0427H10.0543H10.0659H10.0775H10.0891H10.1007H10.1122H10.1238H10.1354H10.1469H10.1585H10.1701H10.1816H10.1932H10.2047H10.2162H10.2278H10.2393H10.2509H10.2624H10.2739H10.2854H10.297H10.3085H10.32H10.3315H10.343H10.3545H10.366H10.3775H10.389H10.4005H10.4119H10.4234H10.4349H10.4464H10.4578H10.4693H10.4808H10.4922H10.5037H10.5151H10.5266H10.538H10.5494H10.5609H10.5723H10.5837H10.5951H10.6066H10.618H10.6294H10.6408H10.6522H10.6636H10.675H10.6864H10.6978H10.7091H10.7205H10.7319H10.7433H10.7546H10.766H10.7773H10.7887H10.8H10.8114H10.8227H10.8341H10.8454H10.8567H10.8681H10.8794H10.8907H10.902H10.9133H10.9246H10.9359H10.9472H10.9585H10.9698H10.981H10.9923H11.0036H11.0149H11.0261H11.0374H11.0486H11.0599H11.0711H11.0824H11.0936H11.1048H11.1161H11.1273H11.1385H11.1497H11.1609H11.1721H11.1833H11.1945H11.2057C11.6199 16.5625 11.9557 16.8983 11.9557 17.3125C11.9557 17.7267 11.6199 18.0625 11.2057 18.0625H11.1945H11.1833H11.1721H11.1609H11.1497H11.1385H11.1273H11.1161H11.1048H11.0936H11.0824H11.0711H11.0599H11.0486H11.0374H11.0261H11.0149H11.0036H10.9923H10.981H10.9698H10.9585H10.9472H10.9359H10.9246H10.9133H10.902H10.8907H10.8794H10.8681H10.8567H10.8454H10.8341H10.8227H10.8114H10.8H10.7887H10.7773H10.766H10.7546H10.7433H10.7319H10.7205H10.7091H10.6978H10.6864H10.675H10.6636H10.6522H10.6408H10.6294H10.618H10.6066H10.5951H10.5837H10.5723H10.5609H10.5494H10.538H10.5266H10.5151H10.5037H10.4922H10.4808H10.4693H10.4578H10.4464H10.4349H10.4234H10.4119H10.4005H10.389H10.3775H10.366H10.3545H10.343H10.3315H10.32H10.3085H10.297H10.2854H10.2739H10.2624H10.2509H10.2393H10.2278H10.2162H10.2047H10.1932H10.1816H10.1701H10.1585H10.1469H10.1354H10.1238H10.1122H10.1007H10.0891H10.0775H10.0659H10.0543H10.0427H10.0311H10.0195H10.0079H9.99633H9.98472H9.97311H9.9615H9.94988H9.93826H9.92664H9.91501H9.90338H9.89175H9.88011H9.86847H9.85682H9.84518H9.83353H9.82188H9.81022H9.79856H9.7869H9.77524H9.76357H9.7519H9.74022H9.72855H9.71687H9.70519H9.6935H9.68181H9.67012H9.65843H9.64673H9.63503H9.62332H9.61162H9.59991H9.5882H9.57648H9.56477H9.55305H9.54132H9.5296H9.51787H9.50614H9.4944H9.48267H9.47093H9.45919H9.44744H9.4357H9.42394H9.41219H9.40044H9.38868H9.37692H9.36516H9.35339H9.34162H9.32985H9.31808H9.3063H9.29452H9.28274H9.27096H9.25917H9.24738H9.23559H9.2238H9.212H9.20021H9.18841H9.1766H9.1648H9.15299H9.14118H9.12937H9.11755H9.10574H9.09392H9.08209H9.07027H9.05844H9.04662H9.03479H9.02295H9.01112H8.99928H8.98744H8.9756H8.96376H8.95191H8.94006H8.92821H8.91636H8.9045H8.89265H8.88079H8.86893H8.85706H8.8452H8.83333H8.82146H8.80959H8.79772H8.78585H8.77397H8.76209H8.75021H8.73833H8.72644H8.71456H8.70267H8.69078H8.67889H8.66699H8.6551H8.6432H8.6313H8.6194H8.60749H8.59559H8.58368H8.57178H8.55987H8.54795H8.53604H8.52413H8.51221H8.50029H8.48837H8.47645H8.46452H8.4526H8.44067H8.42874H8.41682H8.40488H8.39295H8.38102H8.36908H8.35714H8.3452H8.33326H8.32132H8.30938H8.29743H8.28549H8.27354H8.26159H8.24964H8.23769H8.22573H8.21378H8.20182H8.18987H8.17791H8.16595H8.15399H8.14202H8.13006H8.11809H8.10613H8.09416H8.08219H8.07022H8.05825H8.04628H8.0343H8.02233H8.01035H7.99837H7.9864H7.97442H7.96244H7.95045H7.93847H7.92649H7.9145H7.90252H7.89053H7.87854H7.86655H7.85456H7.84257H7.83058H7.81859H7.80659H7.7946H7.7826H7.77061H7.75861H7.74661H7.73461H7.72261H7.71061H7.69861H7.68661H7.6746H7.6626H7.6506H7.63859H7.62658H7.61458H7.60257H7.59056H7.57855H7.56654H7.55453H7.54252H7.53051H7.5185H7.50648H7.49447H7.48246H7.47044H7.45843H7.44641H7.43439H7.42238H7.41036H7.39834H7.38632H7.3743H7.36228H7.35026H7.33824H7.32622H7.3142H7.30218H7.29016H7.27814H7.26611H7.25409H7.24207H7.23004H7.21802H7.20599H7.19397H7.18194H7.16992H7.15789H7.14587H7.13384H7.12182H7.10979H7.09776H7.08574H7.07371H7.06168H7.04966H7.03763H7.0256H7.01357H7.00155H6.98952H6.97749H6.96546H6.95344H6.94141H6.92938H6.91735H6.90532H6.8933H6.88127H6.86924H6.85721H6.84519H6.83316H6.82113H6.8091H6.79708H6.78505H6.77302H6.761H6.74897H6.73694H6.72492H6.71289H6.70087H6.68884H6.67682H6.66479H6.65277H6.64074H6.62872H6.61669H6.60467H6.59265H6.58063H6.5686H6.55658H6.54456H6.53254H6.52052H6.5085H6.49648H6.48446H6.47244H6.46042H6.4484H6.43639H6.42437H6.41235H6.40034H6.38832H6.37631H6.36429H6.35228H6.34027H6.32825H6.31624H6.30423H6.29222H6.28021H6.2682H6.2562H6.24419H6.23218H6.22017H6.20817H6.19617H6.18416H6.17216H6.16016H6.14815H6.13615H6.12415H6.11216H6.10016H6.08816H6.07616H6.06417H6.05217H6.04018H6.02819H6.0162H6.00421H5.99222H5.98023H5.96824H5.95625H5.94427H5.93228H5.9203H5.90832H5.89634H5.88436H5.87238H5.8604H5.84842H5.83645H5.82447H5.8125H5.80053H5.78856H5.77659H5.76462H5.75265H5.74068H5.72872H5.71675H5.70479H5.69283H5.68087H5.66891H5.65696H5.645H5.63305H5.62109H5.60914H5.59719H5.58524H5.57329H5.56135H5.5494H5.53746H5.52552H5.51358H5.50164H5.4897H5.47777H5.46583H5.4539H5.44197H5.43004H5.41811H5.40619H5.39426H5.38234H5.37042H5.3585H5.34658H5.33466H5.32275H5.31084H5.29893H5.28702H5.27511H5.2632H5.2513H5.2394H5.22749H5.2156H5.2037H5.1918H5.17991H5.16802H5.15613C3.36116 18.0625 1.90625 16.6074 1.90625 14.8125V5.25C1.90625 3.45507 3.36132 2 5.15625 2H9.98438H14.8125C16.6081 2 18.0625 3.45745 18.0625 5.25171V5.26407V5.27639V5.28866V5.30089V5.31307V5.32521V5.3373V5.34936V5.36136V5.37333V5.38525V5.39713V5.40896V5.42076V5.43251V5.44422V5.45588V5.46751V5.4791V5.49064V5.50215V5.51361V5.52503V5.53642V5.54776V5.55907V5.57033V5.58156V5.59275V5.6039V5.61501V5.62609V5.63713V5.64813V5.65909V5.67002V5.68091V5.69176V5.70258V5.71336V5.7241V5.73481V5.74549V5.75613V5.76674V5.77731V5.78785V5.79835V5.80882V5.81926V5.82967V5.84004V5.85038V5.86068V5.87096V5.8812V5.89141V5.90159V5.91174V5.92186V5.93195V5.94201V5.95204V5.96204V5.972V5.98194V5.99186V6.00174V6.01159V6.02142V6.03121V6.04098V6.05072V6.06044V6.07013V6.07979V6.08942V6.09903V6.10861V6.11817V6.1277V6.13721V6.14669V6.15615V6.16558V6.17499V6.18437V6.19373V6.20307V6.21238V6.22167V6.23094V6.24018V6.24941V6.25861V6.26779V6.27695V6.28608V6.2952V6.30429V6.31337V6.32242V6.33146V6.34047V6.34947V6.35845V6.3674V6.37634V6.38526V6.39417V6.40305V6.41192V6.42076V6.4296V6.43841V6.44721V6.45599V6.46476V6.47351V6.48224V6.49096V6.49967V6.50836V6.51703V6.52569V6.53434V6.54297V6.55159V6.56019V6.56878V6.57736V6.58593V6.59448V6.60302V6.61155V6.62007V6.62858V6.63707V6.64556V6.65403V6.6625V6.67095V6.67939V6.68783V6.69625V6.70467V6.71308V6.72147V6.72986V6.73825V6.74662V6.75499V6.76334V6.7717V6.78004V6.78838V6.79671V6.80504V6.81336V6.82167V6.82998V6.83829V6.84659V6.85488V6.86317V6.87146V6.87974V6.88802V6.89629V6.90457V6.91284V6.9211V6.92937V6.93763V6.94589V6.95415V6.96241V6.97066V6.97892V6.98718V6.99543V7.00369V7.01194V7.0202V7.02845V7.03671V7.04497V7.05323V7.06149V7.06976V7.07802V7.08629V7.09456V7.10283V7.11111V7.11939V7.12768V7.13596V7.14426V7.15255V7.16086V7.16916V7.17747V7.18579V7.19412V7.20244V7.21078V7.21912V7.22747V7.23583V7.24419V7.25256V7.26094V7.26932V7.27772V7.28612V7.29453V7.30295V7.31138V7.31982V7.32827V7.33673V7.3452V7.35368V7.36217V7.37067V7.37918V7.38771V7.39624V7.40479V7.41335V7.42192V7.43051V7.43911V7.44772V7.45635V7.46498V7.47364V7.4823V7.49099V7.49968V7.5084V7.51712V7.52587V7.53462V7.5434V7.55219V7.561V7.56982V7.57866V7.58752V7.5964V7.60529V7.6142V7.62313V7.63208V7.64105V7.65003V7.65904V7.66806V7.67711V7.68617V7.69526V7.70437V7.71349V7.72264V7.73181V7.741V7.75021V7.75945V7.76871V7.77799V7.78729V7.79661V7.80596V7.81534V7.82473V7.83415V7.8436V7.85307V7.86256V7.87208V7.88162V7.89119V7.90079V7.91041V7.92006V7.92974V7.93944V7.94917V7.95892V7.96871V7.97852V7.98836V7.99823V8.00813V8.01805V8.02801V8.03799V8.048V8.05805V8.06812V8.07823V8.08836V8.09853V8.10872V8.11895V8.12921V8.1395V8.14983V8.16018V8.17057V8.181V8.19145V8.20194V8.21246V8.22302V8.23361V8.24423V8.25489V8.26558V8.27631V8.28708V8.29788V8.30872V8.31959V8.3305V8.34144V8.35242V8.36344V8.3745V8.38559V8.39673V8.4079V8.41911V8.43036V8.44164V8.45297V8.46433V8.47574V8.48718V8.49867V8.51019V8.52176V8.53337V8.54501V8.5567V8.56844V8.58021V8.59203V8.60388V8.61578V8.62773V8.63971V8.65174V8.66382V8.67594V8.6881V8.70031V8.71256V8.72485V8.7372V8.74958V8.76201V8.77449V8.78702V8.79959V8.81221V8.82487V8.83759V8.85035V8.86315V8.87601V8.88891V8.90186V8.91487V8.92792V8.94101V8.95416V8.96736V8.98061V8.99391V9.00726V9.02066V9.03411V9.04761V9.06116V9.07477V9.08843V9.10214V9.1159V9.12971V9.14358V9.1575V9.17148V9.18551V9.19959V9.21373V9.22792V9.24216V9.25646V9.27082V9.28523V9.2997V9.31422V9.3288V9.34344V9.35813V9.37288V9.38769V9.40256V9.41748V9.43246V9.4475V9.4626V9.47775V9.49297V9.50824V9.52358V9.53897V9.55443V9.56994V9.58552V9.60115V9.61685V9.63261V9.64843V9.66431V9.68025V9.69626V9.71233V9.72846V9.74465V9.76091V9.77723V9.79362V9.81007V9.82658V9.84316V9.8598V9.87651V9.89329V9.91012V9.92703V9.944V9.96104V9.97814V9.99531V10.0126V10.0299V10.0472V10.0647V10.0822V10.0998V10.1174V10.1351V10.1529V10.1708V10.1887V10.2067V10.2247V10.2429V10.2611V10.2793V10.2977V10.3161V10.3346V10.3532V10.3718V10.3905V10.4093V10.4281V10.447V10.466V10.4851V10.5043V10.5235V10.5428V10.5621V10.5816V10.6011V10.6207V10.6404V10.6601V10.6799V10.6998V10.7198V10.7398V10.76V10.7802V10.8005V10.8208V10.8413V10.8618V10.8824V10.9031V10.9238V10.9446V10.9656V10.9865V11.0076V11.0288V11.05V11.0713V11.0927V11.1142V11.1358V11.1574V11.1791V11.2009V11.2228V11.2448C18.0625 11.659 17.7267 11.9948 17.3125 11.9948C16.8983 11.9948 16.5625 11.659 16.5625 11.2448V11.2228V11.2009V11.1791V11.1574V11.1358V11.1142V11.0927V11.0713V11.05V11.0288V11.0076V10.9865V10.9656V10.9446V10.9238V10.9031V10.8824V10.8618V10.8413V10.8208V10.8005V10.7802V10.76V10.7398V10.7198V10.6998V10.6799V10.6601V10.6404V10.6207V10.6011V10.5816V10.5621V10.5428V10.5235V10.5043V10.4851V10.466V10.447V10.4281V10.4093V10.3905V10.3718V10.3532V10.3346V10.3161V10.2977V10.2793V10.2611V10.2429V10.2247V10.2067V10.1887V10.1708V10.1529V10.1351V10.1174V10.0998V10.0822V10.0647V10.0472V10.0299V10.0126V9.99531V9.97814V9.96104V9.944V9.92703V9.91012V9.89329V9.87651V9.8598V9.84316V9.82658V9.81007V9.79362V9.77723V9.76091V9.74465V9.72846V9.71233V9.69626V9.68025V9.66431V9.64843V9.63261V9.61685V9.60115V9.58552V9.56994V9.55443V9.53897V9.52358V9.50824V9.49297V9.47775V9.4626V9.4475V9.43246V9.41748V9.40256V9.38769V9.37288V9.35813V9.34344V9.3288V9.31422V9.2997V9.28523V9.27082V9.25646V9.24216V9.22792V9.21373V9.19959V9.18551V9.17148V9.1575V9.14358V9.12971V9.1159V9.10214V9.08843V9.07477V9.06116V9.04761V9.03411V9.02066V9.00726V8.99391V8.98061V8.96736V8.95416V8.94101V8.92792V8.91487V8.90186V8.88891V8.87601V8.86315V8.85035V8.83759V8.82487V8.81221V8.79959V8.78702V8.77449V8.76201V8.74958V8.7372V8.72485V8.71256V8.70031V8.6881V8.67594V8.66382V8.65174V8.63971V8.62773V8.61578V8.60388V8.59203V8.58021V8.56844V8.5567V8.54501V8.53337V8.52176V8.51019V8.49867V8.48718V8.47574V8.46433V8.45297V8.44164V8.43036V8.41911V8.4079V8.39673V8.38559V8.3745V8.36344V8.35242V8.34144V8.3305V8.31959V8.30872V8.29788V8.28708V8.27631V8.26558V8.25489V8.24423V8.23361V8.22302V8.21246V8.20194V8.19145V8.181V8.17057V8.16018V8.14983V8.1395V8.12921V8.11895V8.10872V8.09853V8.08836V8.07823V8.06812V8.05805V8.048V8.03799V8.02801V8.01805V8.00813V7.99823V7.98836V7.97852V7.96871V7.95892V7.94917V7.93944V7.92974V7.92006V7.91041V7.90079V7.89119V7.88162V7.87208V7.86256V7.85307V7.8436V7.83415V7.82473V7.81534V7.80596V7.79661V7.78729V7.77799V7.76871V7.75945V7.75021V7.741V7.73181V7.72264V7.71349V7.70437V7.69526V7.68617V7.67711V7.66806V7.65904V7.65003V7.64105V7.63208V7.62313V7.6142V7.60529V7.5964V7.58752V7.57866V7.56982V7.561V7.55219V7.5434V7.53462V7.52587V7.51712V7.5084V7.49968V7.49099V7.4823V7.47364V7.46498V7.45635V7.44772V7.43911V7.43051V7.42192V7.41335V7.40479V7.39624V7.38771V7.37918V7.37067V7.36217V7.35368V7.3452V7.33673V7.32827V7.31982V7.31138V7.30295V7.29453V7.28612V7.27772V7.26932V7.26094V7.25256V7.24419V7.23583V7.22747V7.21912V7.21078V7.20244V7.19412V7.18579V7.17747V7.16916V7.16086V7.15255V7.14426V7.13596V7.12768V7.11939V7.11111V7.10283V7.09456V7.08629V7.07802V7.06976V7.06149V7.05323V7.04497V7.03671V7.02845V7.0202V7.01194V7.00369V6.99543V6.98718V6.97892V6.97066V6.96241V6.95415V6.94589V6.93763V6.92937V6.9211V6.91284V6.90457V6.89629V6.88802V6.87974V6.87146V6.86317V6.85488V6.84659V6.83829V6.82998V6.82167V6.81336V6.80504V6.79671V6.78838V6.78004V6.7717V6.76334V6.75499V6.74662V6.73825V6.72986V6.72147V6.71308V6.70467V6.69625V6.68783V6.67939V6.67095V6.6625V6.65403V6.64556V6.63707V6.62858V6.62007V6.61155V6.60302V6.59448V6.58593V6.57736V6.56878V6.56019V6.55159V6.54297V6.53434V6.52569V6.51703V6.50836V6.49967V6.49096V6.48224V6.47351V6.46476V6.45599V6.44721V6.43841V6.4296V6.42076V6.41192V6.40305V6.39417V6.38526V6.37634V6.3674V6.35845V6.34947V6.34047V6.33146V6.32242V6.31337V6.30429V6.2952V6.28608V6.27695V6.26779V6.25861V6.24941V6.24018V6.23094V6.22167V6.21238V6.20307V6.19373V6.18437V6.17499V6.16558V6.15615V6.14669V6.13721V6.1277V6.11817V6.10861V6.09903V6.08942V6.07979V6.07013V6.06044V6.05072V6.04098V6.03121V6.02142V6.01159V6.00174V5.99186V5.98194V5.972V5.96204V5.95204V5.94201V5.93195V5.92186V5.91174V5.90159V5.89141V5.8812V5.87096V5.86068V5.85038V5.84004V5.82967V5.81926V5.80882V5.79835V5.78785V5.77731V5.76674V5.75613V5.74549V5.73481V5.7241V5.71336V5.70258V5.69176V5.68091V5.67002V5.65909V5.64813V5.63713V5.62609V5.61501V5.6039V5.59275V5.58156V5.57033V5.55907V5.54776V5.53642V5.52503V5.51361V5.50215V5.49064V5.4791V5.46751V5.45588V5.44422V5.43251V5.42076V5.40896V5.39713V5.38525V5.37333V5.36136V5.34936V5.3373V5.32521V5.31307V5.30089V5.28866V5.27639V5.26407V5.25171C16.5625 4.28454 15.7783 3.5 14.8125 3.5H9.98438H5.15625ZM5.08334 6.66671C5.08334 6.25249 5.41912 5.91671 5.83334 5.91671H14.1667C14.5809 5.91671 14.9167 6.25249 14.9167 6.66671C14.9167 7.08092 14.5809 7.41671 14.1667 7.41671H5.83334C5.41912 7.41671 5.08334 7.08092 5.08334 6.66671ZM5.83334 12.5834C5.41912 12.5834 5.08334 12.9192 5.08334 13.3334C5.08334 13.7476 5.41912 14.0834 5.83334 14.0834H10C10.4142 14.0834 10.75 13.7476 10.75 13.3334C10.75 12.9192 10.4142 12.5834 10 12.5834H5.83334ZM5.08334 10C5.08334 9.58583 5.41912 9.25004 5.83334 9.25004H14.1667C14.5809 9.25004 14.9167 9.58583 14.9167 10C14.9167 10.4143 14.5809 10.75 14.1667 10.75H5.83334C5.41912 10.75 5.08334 10.4143 5.08334 10ZM16.5834 13.3334C16.5834 12.9192 16.2476 12.5834 15.8334 12.5834C15.4191 12.5834 15.0834 12.9192 15.0834 13.3334V15.0834H13.3334C12.9191 15.0834 12.5834 15.4192 12.5834 15.8334C12.5834 16.2476 12.9191 16.5834 13.3334 16.5834H15.0834V18.3334C15.0834 18.7476 15.4191 19.0834 15.8334 19.0834C16.2476 19.0834 16.5834 18.7476 16.5834 18.3334V16.5834H18.3334C18.7476 16.5834 19.0834 16.2476 19.0834 15.8334C19.0834 15.4192 18.7476 15.0834 18.3334 15.0834H16.5834V13.3334Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default DocumentPlus20;
