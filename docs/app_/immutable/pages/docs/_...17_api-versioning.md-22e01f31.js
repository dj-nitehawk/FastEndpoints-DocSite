import{S as jo,i as Mo,s as Uo,l as p,r as l,a as B,w as y,m as r,n as i,u as a,h as e,c as d,x as u,p as S,b as t,M as n,y as v,v as zo,f as $,t as m,B as g,_ as Jo}from"../../chunks/index-6391be64.js";import{f as Ko}from"../../chunks/scroll-4f99ad69.js";import{C as h}from"../../chunks/CodeFence-e0140bb4.js";import{L as pe}from"../../chunks/Link-69c668c2.js";import"../../chunks/singletons-9fd4729a.js";import"../../chunks/contexts-c56b72f8.js";function Qo(E){let f;return{c(){f=l("#")},l(c){f=a(c,"#")},m(c,A){t(c,f,A)},d(c){c&&e(f)}}}function Xo(E){let f;return{c(){f=l("#")},l(c){f=a(c,"#")},m(c,A){t(c,f,A)},d(c){c&&e(f)}}}function Zo(E){let f;return{c(){f=l("#")},l(c){f=a(c,"#")},m(c,A){t(c,f,A)},d(c){c&&e(f)}}}function sl(E){let f;return{c(){f=l("#")},l(c){f=a(c,"#")},m(c,A){t(c,f,A)},d(c){c&&e(f)}}}function el(E){let f;return{c(){f=l("#")},l(c){f=a(c,"#")},m(c,A){t(c,f,A)},d(c){c&&e(f)}}}function nl(E){let f,c=E[0].title+"",A,ns,os,Ne,re,ls,Ie,ie,as,He,ce,ts,Ye,fe,ps,bs,Le,Be,rs,We,de,L,is,Ss,je,ye,W,cs,Me,ue,j,fs,ks,Ue,ve,M,Bs,ze,$e,U,ds,Je,me,k,G,Ke,ge,V,Qe,Ds,Xe,Ze,Ae,z,D,q,sn,Ee,J,w,en,Os,nn,on,Ts,ln,an,Fe,ys,tn,he,us,pn,_e,O,N,rn,we,K,T,I,cn,Ce,vs,fn,xe,Q,C,Bn,Rs,dn,yn,Ps,un,vn,be,$s,Gs,$n,Se,X,ms,Vs,mn,ke,Z,gs,qs,gn,De,ss,F,An,Ns,En,Fn,Is,hn,_n,Hs,wn,Cn,Ys,xn,bn,Oe,As,Sn,Te,Es,Ls,kn,Re,es,Fs,Dn,Pe,R,H,On,Ge,hs,Tn,Ve,x,Ws,_s,js,Rn,Pn,Gn,Ms,Y,Us,Vn,qn,zs,Nn,In,Hn,Js,_,Ks,Yn,Ln,Qs,Wn,jn,Xs,Mn,Un,Zs,zn,Jn,se;return L=new h({props:{lang:"text",ext:"text",linesCount:3,code:`<pre><code><span class="line"><span style="color: undefined">/admin/login</span></span>
<span class="line"><span style="color: undefined">/inventory/order/{OrderID}</span></span>
<span class="line"><span style="color: undefined"></span></span></code></pre>`}}),W=new h({props:{lang:"text",ext:"text",linesCount:4,code:`<pre><code><span class="line"><span style="color: undefined">/admin/login</span></span>
<span class="line"><span style="color: undefined">/admin/login/v1</span></span>
<span class="line"><span style="color: undefined">/inventory/order/{OrderID}</span></span>
<span class="line"><span style="color: undefined"></span></span></code></pre>`}}),j=new h({props:{lang:"text",ext:"text",linesCount:8,code:`<pre><code><span class="line"><span style="color: undefined"> - initial release</span></span>
<span class="line"><span style="color: undefined"> |- /admin/login</span></span>
<span class="line"><span style="color: undefined"> |- /inventory/order/{OrderID}</span></span>
<span class="line"><span style="color: undefined"></span></span>
<span class="line"><span style="color: undefined"> - release 1.0</span></span>
<span class="line"><span style="color: undefined"> |- /admin/login/v1</span></span>
<span class="line"><span style="color: undefined"> |- /inventory/order/{OrderID}</span></span>
<span class="line"><span style="color: undefined"></span></span></code></pre>`}}),M=new h({props:{lang:"text",ext:"text",linesCount:6,code:`<pre><code><span class="line"><span style="color: undefined">- /admin/login</span></span>
<span class="line"><span style="color: undefined">- /admin/login/v1</span></span>
<span class="line"><span style="color: undefined">- /admin/login/v2</span></span>
<span class="line"><span style="color: undefined">- /inventory/order/{OrderID}</span></span>
<span class="line"><span style="color: undefined">- /inventory/order/{OrderID}/v1</span></span>
<span class="line"><span style="color: undefined"></span></span></code></pre>`}}),U=new h({props:{lang:"text",ext:"text",linesCount:12,code:`<pre><code><span class="line"><span style="color: undefined"> - initial release</span></span>
<span class="line"><span style="color: undefined"> |- /admin/login</span></span>
<span class="line"><span style="color: undefined"> |- /inventory/order/{OrderID}</span></span>
<span class="line"><span style="color: undefined"></span></span>
<span class="line"><span style="color: undefined"> - release 1.0</span></span>
<span class="line"><span style="color: undefined"> |- /admin/login/v1</span></span>
<span class="line"><span style="color: undefined"> |- /inventory/order/{OrderID}</span></span>
<span class="line"><span style="color: undefined"></span></span>
<span class="line"><span style="color: undefined"> - release 2.0</span></span>
<span class="line"><span style="color: undefined"> |- /admin/login/v2</span></span>
<span class="line"><span style="color: undefined"> |- /inventory/order/{OrderID}/v1</span></span>
<span class="line"><span style="color: undefined"></span></span></code></pre>`}}),G=new pe({props:{class:"header-anchor",href:"#enable-versioning","aria-hidden":"true",$$slots:{default:[Qo]},$$scope:{ctx:E}}}),z=new h({props:{lang:"csharp",ext:"cs",linesCount:5,code:`<pre><code><span class="line"><span style="color: #E5C07B">app</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">UseFastEndpoints</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">c</span><span style="color: #ABB2BF"> =&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">c</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">VersioningOptions</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">o</span><span style="color: #ABB2BF"> =&gt; </span><span style="color: #E5C07B">o</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Prefix</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;v&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">});</span></span>
<span class="line"></span></code></pre>`}}),q=new pe({props:{class:"header-anchor",href:"#define-swagger-docs-release-groups","aria-hidden":"true",$$slots:{default:[Xo]},$$scope:{ctx:E}}}),J=new h({props:{title:"Program.cs",lang:"csharp",ext:"cs",linesCount:19,code:`<pre><code><span class="line"><span style="color: #E5C07B">builder</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Services</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">AddSwaggerDoc</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF"> =&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">DocumentName</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;Initial Release&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Title</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;my api&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Version</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;v1.0&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    })</span></span>
<span class="line"><span style="color: #ABB2BF">    .</span><span style="color: #61AFEF">AddSwaggerDoc</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">maxEndpointVersion</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">settings</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF"> =&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">DocumentName</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;Release 1.0&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Title</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;my api&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Version</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;v1.0&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    })</span></span>
<span class="line"><span style="color: #ABB2BF">    .</span><span style="color: #61AFEF">AddSwaggerDoc</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">maxEndpointVersion</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">settings</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF"> =&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">DocumentName</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;Release 2.0&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Title</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;my api&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">s</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Version</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;v2.0&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    });</span></span>
<span class="line"></span></code></pre>`}}),N=new pe({props:{class:"header-anchor",href:"#mark-endpoint-with-a-version","aria-hidden":"true",$$slots:{default:[Zo]},$$scope:{ctx:E}}}),K=new h({props:{lang:"csharp",ext:"cs",linesCount:9,code:`<pre><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">AdminLoginEndpoint_V2</span><span style="color: #ABB2BF"> : </span><span style="color: #E5C07B">Endpoint</span><span style="color: #ABB2BF">&lt;</span><span style="color: #E5C07B">Request</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">override</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">void</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Configure</span><span style="color: #ABB2BF">()</span></span>
<span class="line"><span style="color: #ABB2BF">    {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">Get</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;admin/login&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">Version</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre>`}}),I=new pe({props:{class:"header-anchor",href:"#deprecate-an-endpoint","aria-hidden":"true",$$slots:{default:[sl]},$$scope:{ctx:E}}}),Q=new h({props:{lang:"csharp",ext:"cs",linesCount:2,code:`<pre><code><span class="line"><span style="color: #61AFEF">Version</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">deprecateAt</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">4</span><span style="color: #ABB2BF">);</span></span>
<span class="line"></span></code></pre>`}}),X=new h({props:{lang:"text",ext:"text",linesCount:3,code:`<pre><code><span class="line"><span style="color: undefined">/user/delete</span></span>
<span class="line"><span style="color: undefined">/user/profile</span></span>
<span class="line"><span style="color: undefined"></span></span></code></pre>`}}),Z=new h({props:{lang:"text",ext:"text",linesCount:3,code:`<pre><code><span class="line"><span style="color: undefined">/user/delete/v1</span></span>
<span class="line"><span style="color: undefined">/user/profile/v1</span></span>
<span class="line"><span style="color: undefined"></span></span></code></pre>`}}),ss=new h({props:{lang:"text",ext:"text",linesCount:3,code:`<pre><code><span class="line"><span style="color: undefined">/user/delete/v1</span></span>
<span class="line"><span style="color: undefined">/user/profile/v2</span></span>
<span class="line"><span style="color: undefined"></span></span></code></pre>`}}),es=new h({props:{lang:"text",ext:"text",linesCount:2,code:`<pre><code><span class="line"><span style="color: undefined">/user/profile/v2</span></span>
<span class="line"><span style="color: undefined"></span></span></code></pre>`}}),H=new pe({props:{class:"header-anchor",href:"#versioning-options","aria-hidden":"true",$$slots:{default:[el]},$$scope:{ctx:E}}}),{c(){f=p("h1"),A=l(c),ns=B(),os=p("p"),Ne=l("The versioning strategy in FastEndpoints is simplified to require way less effort by the developer."),re=B(),ls=p("p"),Ie=l("Basically, you evolve/version each endpoint in your project independently and group them into a release number/name using Swagger."),ie=B(),as=p("p"),He=l("When it's time for an endpoint contract to change, simply leave the existing endpoint alone and create (either by inheriting the old one) or creating a brand new endpoint class and call the Version(x) method in the configuration to indicate that this is the latest incarnation of the endpoint."),ce=B(),ts=p("p"),Ye=l("For example, let's assume the following:"),fe=B(),ps=p("p"),bs=p("strong"),Le=l("Initial State"),Be=B(),rs=p("p"),We=l("Your app has the following endpoints:"),de=B(),y(L.$$.fragment),is=p("p"),Ss=p("strong"),je=l("After Evolving an Endpoint"),ye=B(),y(W.$$.fragment),cs=p("p"),Me=l("At this point you can have 2 releases (Swagger documents) that look like the following:"),ue=B(),y(j.$$.fragment),fs=p("p"),ks=p("strong"),Ue=l("After Another Change"),ve=B(),y(M.$$.fragment),Bs=p("p"),ze=l("Your releases can now look like this:"),$e=B(),y(U.$$.fragment),ds=p("p"),Je=l(`A release group contains only the latest iteration of each endpoint in your project.
All older/previous iterations will not show up.
How to define release groups is described below.`),me=B(),k=p("h2"),y(G.$$.fragment),Ke=l(" Enable Versioning"),ge=B(),V=p("p"),Qe=l("Simply specify one of the "),Ds=p("strong"),Xe=l("VersioningOptions"),Ze=l(" settings in startup config in order to activate versioning."),Ae=B(),y(z.$$.fragment),D=p("h2"),y(q.$$.fragment),sn=l(" Define Swagger Docs (Release Groups)"),Ee=B(),y(J.$$.fragment),w=p("p"),en=l("The thing to note here is the "),Os=p("strong"),nn=l("maxEndpointVersion"),on=l(` parameter.
This is where you specify the `),Ts=p("strong"),ln=l("max version"),an=l(" of an endpoint which a release group should include."),Fe=B(),ys=p("p"),tn=l("Any endpoint versions that are greater than this number will not be included in that release group/swagger doc."),he=B(),us=p("p"),pn=l("If you don't specify this, only the initial version of each endpoint will be listed in the group."),_e=B(),O=p("h2"),y(N.$$.fragment),rn=l(" Mark Endpoint With a Version"),we=B(),y(K.$$.fragment),T=p("h2"),y(I.$$.fragment),cn=l(" Deprecate an Endpoint"),Ce=B(),vs=p("p"),fn=l("You can specify that an endpoint should not be visible after (and including) a given version group like so:"),xe=B(),y(Q.$$.fragment),C=p("p"),Bn=l("An endpoint marked as above will be visible in all swagger docs up until "),Rs=p("strong"),dn=l("maxEndpointVersion : 4"),yn=l(". it will be excluded from docs starting from "),Ps=p("strong"),un=l("4"),vn=l(" and above. as an example, take to following two endpoints."),be=B(),$s=p("p"),Gs=p("strong"),$n=l("Initial release"),Se=B(),y(X.$$.fragment),ms=p("p"),Vs=p("strong"),mn=l("Release Group v1.0"),ke=B(),y(Z.$$.fragment),gs=p("p"),qs=p("strong"),gn=l("Release Group v2.0"),De=B(),y(ss.$$.fragment),F=p("p"),An=l("If you mark the "),Ns=p("strong"),En=l("/user/delete/v1 endpoint"),Fn=l(" with "),Is=p("strong"),hn=l("Version(1, deprecateAt: 2)"),_n=l(" then release groups "),Hs=p("strong"),wn=l("v2.0"),Cn=l(" and newer will not have any "),Ys=p("strong"),xn=l("/user/delete"),bn=l(" endpoints listed."),Oe=B(),As=p("p"),Sn=l("And the release will look like this:"),Te=B(),Es=p("p"),Ls=p("strong"),kn=l("release group v2.0"),Re=B(),y(es.$$.fragment),Fs=p("p"),Dn=l(`It is only necessary to mark the last endpoint version as deprecated.
You can leave all previous iterations alone, if there's any.`),Pe=B(),R=p("h2"),y(H.$$.fragment),On=l(" Versioning Options"),Ge=B(),hs=p("p"),Tn=l("At least one of the following settings should be set in order to enable versioning support."),Ve=B(),x=p("ul"),Ws=p("li"),_s=p("p"),js=p("strong"),Rn=l("Prefix"),Pn=l(" : A string to be used in front of the version (for example 'v' produces 'v1')"),Gn=B(),Ms=p("li"),Y=p("p"),Us=p("strong"),Vn=l("DefaultVersion"),qn=l(` : This value will be used for endpoints that do not specify a version in it's configuration.
The default value is `),zs=p("strong"),Nn=l("0"),In=l(`.
When the version of an endpoint is 0 it does not get added to the route making that version the initial version of that endpoint.`),Hn=B(),Js=p("li"),_=p("p"),Ks=p("strong"),Yn=l("SuffixedVersion"),Ln=l(" : By default the version string is "),Qs=p("strong"),Wn=l("appended"),jn=l(" to the endpoint route. By setting this to "),Xs=p("strong"),Mn=l("false"),Un=l(", you can have it "),Zs=p("strong"),zn=l("prepended"),Jn=l(" to the route."),this.h()},l(s){f=r(s,"H1",{});var o=i(f);A=a(o,c),o.forEach(e),ns=d(s),os=r(s,"P",{});var ee=i(os);Ne=a(ee,"The versioning strategy in FastEndpoints is simplified to require way less effort by the developer."),ee.forEach(e),re=d(s),ls=r(s,"P",{});var ne=i(ls);Ie=a(ne,"Basically, you evolve/version each endpoint in your project independently and group them into a release number/name using Swagger."),ne.forEach(e),ie=d(s),as=r(s,"P",{});var oe=i(as);He=a(oe,"When it's time for an endpoint contract to change, simply leave the existing endpoint alone and create (either by inheriting the old one) or creating a brand new endpoint class and call the Version(x) method in the configuration to indicate that this is the latest incarnation of the endpoint."),oe.forEach(e),ce=d(s),ts=r(s,"P",{});var le=i(ts);Ye=a(le,"For example, let's assume the following:"),le.forEach(e),fe=d(s),ps=r(s,"P",{});var ae=i(ps);bs=r(ae,"STRONG",{});var no=i(bs);Le=a(no,"Initial State"),no.forEach(e),ae.forEach(e),Be=d(s),rs=r(s,"P",{});var oo=i(rs);We=a(oo,"Your app has the following endpoints:"),oo.forEach(e),de=d(s),u(L.$$.fragment,s),is=r(s,"P",{});var lo=i(is);Ss=r(lo,"STRONG",{});var ao=i(Ss);je=a(ao,"After Evolving an Endpoint"),ao.forEach(e),lo.forEach(e),ye=d(s),u(W.$$.fragment,s),cs=r(s,"P",{});var to=i(cs);Me=a(to,"At this point you can have 2 releases (Swagger documents) that look like the following:"),to.forEach(e),ue=d(s),u(j.$$.fragment,s),fs=r(s,"P",{});var po=i(fs);ks=r(po,"STRONG",{});var ro=i(ks);Ue=a(ro,"After Another Change"),ro.forEach(e),po.forEach(e),ve=d(s),u(M.$$.fragment,s),Bs=r(s,"P",{});var io=i(Bs);ze=a(io,"Your releases can now look like this:"),io.forEach(e),$e=d(s),u(U.$$.fragment,s),ds=r(s,"P",{});var co=i(ds);Je=a(co,`A release group contains only the latest iteration of each endpoint in your project.
All older/previous iterations will not show up.
How to define release groups is described below.`),co.forEach(e),me=d(s),k=r(s,"H2",{id:!0,tabindex:!0});var Kn=i(k);u(G.$$.fragment,Kn),Ke=a(Kn," Enable Versioning"),Kn.forEach(e),ge=d(s),V=r(s,"P",{});var qe=i(V);Qe=a(qe,"Simply specify one of the "),Ds=r(qe,"STRONG",{});var fo=i(Ds);Xe=a(fo,"VersioningOptions"),fo.forEach(e),Ze=a(qe," settings in startup config in order to activate versioning."),qe.forEach(e),Ae=d(s),u(z.$$.fragment,s),D=r(s,"H2",{id:!0,tabindex:!0});var Qn=i(D);u(q.$$.fragment,Qn),sn=a(Qn," Define Swagger Docs (Release Groups)"),Qn.forEach(e),Ee=d(s),u(J.$$.fragment,s),w=r(s,"P",{});var ws=i(w);en=a(ws,"The thing to note here is the "),Os=r(ws,"STRONG",{});var Bo=i(Os);nn=a(Bo,"maxEndpointVersion"),Bo.forEach(e),on=a(ws,` parameter.
This is where you specify the `),Ts=r(ws,"STRONG",{});var yo=i(Ts);ln=a(yo,"max version"),yo.forEach(e),an=a(ws," of an endpoint which a release group should include."),ws.forEach(e),Fe=d(s),ys=r(s,"P",{});var uo=i(ys);tn=a(uo,"Any endpoint versions that are greater than this number will not be included in that release group/swagger doc."),uo.forEach(e),he=d(s),us=r(s,"P",{});var vo=i(us);pn=a(vo,"If you don't specify this, only the initial version of each endpoint will be listed in the group."),vo.forEach(e),_e=d(s),O=r(s,"H2",{id:!0,tabindex:!0});var Xn=i(O);u(N.$$.fragment,Xn),rn=a(Xn," Mark Endpoint With a Version"),Xn.forEach(e),we=d(s),u(K.$$.fragment,s),T=r(s,"H2",{id:!0,tabindex:!0});var Zn=i(T);u(I.$$.fragment,Zn),cn=a(Zn," Deprecate an Endpoint"),Zn.forEach(e),Ce=d(s),vs=r(s,"P",{});var $o=i(vs);fn=a($o,"You can specify that an endpoint should not be visible after (and including) a given version group like so:"),$o.forEach(e),xe=d(s),u(Q.$$.fragment,s),C=r(s,"P",{});var Cs=i(C);Bn=a(Cs,"An endpoint marked as above will be visible in all swagger docs up until "),Rs=r(Cs,"STRONG",{});var mo=i(Rs);dn=a(mo,"maxEndpointVersion : 4"),mo.forEach(e),yn=a(Cs,". it will be excluded from docs starting from "),Ps=r(Cs,"STRONG",{});var go=i(Ps);un=a(go,"4"),go.forEach(e),vn=a(Cs," and above. as an example, take to following two endpoints."),Cs.forEach(e),be=d(s),$s=r(s,"P",{});var Ao=i($s);Gs=r(Ao,"STRONG",{});var Eo=i(Gs);$n=a(Eo,"Initial release"),Eo.forEach(e),Ao.forEach(e),Se=d(s),u(X.$$.fragment,s),ms=r(s,"P",{});var Fo=i(ms);Vs=r(Fo,"STRONG",{});var ho=i(Vs);mn=a(ho,"Release Group v1.0"),ho.forEach(e),Fo.forEach(e),ke=d(s),u(Z.$$.fragment,s),gs=r(s,"P",{});var _o=i(gs);qs=r(_o,"STRONG",{});var wo=i(qs);gn=a(wo,"Release Group v2.0"),wo.forEach(e),_o.forEach(e),De=d(s),u(ss.$$.fragment,s),F=r(s,"P",{});var b=i(F);An=a(b,"If you mark the "),Ns=r(b,"STRONG",{});var Co=i(Ns);En=a(Co,"/user/delete/v1 endpoint"),Co.forEach(e),Fn=a(b," with "),Is=r(b,"STRONG",{});var xo=i(Is);hn=a(xo,"Version(1, deprecateAt: 2)"),xo.forEach(e),_n=a(b," then release groups "),Hs=r(b,"STRONG",{});var bo=i(Hs);wn=a(bo,"v2.0"),bo.forEach(e),Cn=a(b," and newer will not have any "),Ys=r(b,"STRONG",{});var So=i(Ys);xn=a(So,"/user/delete"),So.forEach(e),bn=a(b," endpoints listed."),b.forEach(e),Oe=d(s),As=r(s,"P",{});var ko=i(As);Sn=a(ko,"And the release will look like this:"),ko.forEach(e),Te=d(s),Es=r(s,"P",{});var Do=i(Es);Ls=r(Do,"STRONG",{});var Oo=i(Ls);kn=a(Oo,"release group v2.0"),Oo.forEach(e),Do.forEach(e),Re=d(s),u(es.$$.fragment,s),Fs=r(s,"P",{});var To=i(Fs);Dn=a(To,`It is only necessary to mark the last endpoint version as deprecated.
You can leave all previous iterations alone, if there's any.`),To.forEach(e),Pe=d(s),R=r(s,"H2",{id:!0,tabindex:!0});var so=i(R);u(H.$$.fragment,so),On=a(so," Versioning Options"),so.forEach(e),Ge=d(s),hs=r(s,"P",{});var Ro=i(hs);Tn=a(Ro,"At least one of the following settings should be set in order to enable versioning support."),Ro.forEach(e),Ve=d(s),x=r(s,"UL",{});var xs=i(x);Ws=r(xs,"LI",{});var Po=i(Ws);_s=r(Po,"P",{});var eo=i(_s);js=r(eo,"STRONG",{});var Go=i(js);Rn=a(Go,"Prefix"),Go.forEach(e),Pn=a(eo," : A string to be used in front of the version (for example 'v' produces 'v1')"),eo.forEach(e),Po.forEach(e),Gn=d(xs),Ms=r(xs,"LI",{});var Vo=i(Ms);Y=r(Vo,"P",{});var te=i(Y);Us=r(te,"STRONG",{});var qo=i(Us);Vn=a(qo,"DefaultVersion"),qo.forEach(e),qn=a(te,` : This value will be used for endpoints that do not specify a version in it's configuration.
The default value is `),zs=r(te,"STRONG",{});var No=i(zs);Nn=a(No,"0"),No.forEach(e),In=a(te,`.
When the version of an endpoint is 0 it does not get added to the route making that version the initial version of that endpoint.`),te.forEach(e),Vo.forEach(e),Hn=d(xs),Js=r(xs,"LI",{});var Io=i(Js);_=r(Io,"P",{});var P=i(_);Ks=r(P,"STRONG",{});var Ho=i(Ks);Yn=a(Ho,"SuffixedVersion"),Ho.forEach(e),Ln=a(P," : By default the version string is "),Qs=r(P,"STRONG",{});var Yo=i(Qs);Wn=a(Yo,"appended"),Yo.forEach(e),jn=a(P," to the endpoint route. By setting this to "),Xs=r(P,"STRONG",{});var Lo=i(Xs);Mn=a(Lo,"false"),Lo.forEach(e),Un=a(P,", you can have it "),Zs=r(P,"STRONG",{});var Wo=i(Zs);zn=a(Wo,"prepended"),Wo.forEach(e),Jn=a(P," to the route."),P.forEach(e),Io.forEach(e),xs.forEach(e),this.h()},h(){S(k,"id","enable-versioning"),S(k,"tabindex","-1"),S(D,"id","define-swagger-docs-release-groups"),S(D,"tabindex","-1"),S(O,"id","mark-endpoint-with-a-version"),S(O,"tabindex","-1"),S(T,"id","deprecate-an-endpoint"),S(T,"tabindex","-1"),S(R,"id","versioning-options"),S(R,"tabindex","-1")},m(s,o){t(s,f,o),n(f,A),t(s,ns,o),t(s,os,o),n(os,Ne),t(s,re,o),t(s,ls,o),n(ls,Ie),t(s,ie,o),t(s,as,o),n(as,He),t(s,ce,o),t(s,ts,o),n(ts,Ye),t(s,fe,o),t(s,ps,o),n(ps,bs),n(bs,Le),t(s,Be,o),t(s,rs,o),n(rs,We),t(s,de,o),v(L,s,o),t(s,is,o),n(is,Ss),n(Ss,je),t(s,ye,o),v(W,s,o),t(s,cs,o),n(cs,Me),t(s,ue,o),v(j,s,o),t(s,fs,o),n(fs,ks),n(ks,Ue),t(s,ve,o),v(M,s,o),t(s,Bs,o),n(Bs,ze),t(s,$e,o),v(U,s,o),t(s,ds,o),n(ds,Je),t(s,me,o),t(s,k,o),v(G,k,null),n(k,Ke),t(s,ge,o),t(s,V,o),n(V,Qe),n(V,Ds),n(Ds,Xe),n(V,Ze),t(s,Ae,o),v(z,s,o),t(s,D,o),v(q,D,null),n(D,sn),t(s,Ee,o),v(J,s,o),t(s,w,o),n(w,en),n(w,Os),n(Os,nn),n(w,on),n(w,Ts),n(Ts,ln),n(w,an),t(s,Fe,o),t(s,ys,o),n(ys,tn),t(s,he,o),t(s,us,o),n(us,pn),t(s,_e,o),t(s,O,o),v(N,O,null),n(O,rn),t(s,we,o),v(K,s,o),t(s,T,o),v(I,T,null),n(T,cn),t(s,Ce,o),t(s,vs,o),n(vs,fn),t(s,xe,o),v(Q,s,o),t(s,C,o),n(C,Bn),n(C,Rs),n(Rs,dn),n(C,yn),n(C,Ps),n(Ps,un),n(C,vn),t(s,be,o),t(s,$s,o),n($s,Gs),n(Gs,$n),t(s,Se,o),v(X,s,o),t(s,ms,o),n(ms,Vs),n(Vs,mn),t(s,ke,o),v(Z,s,o),t(s,gs,o),n(gs,qs),n(qs,gn),t(s,De,o),v(ss,s,o),t(s,F,o),n(F,An),n(F,Ns),n(Ns,En),n(F,Fn),n(F,Is),n(Is,hn),n(F,_n),n(F,Hs),n(Hs,wn),n(F,Cn),n(F,Ys),n(Ys,xn),n(F,bn),t(s,Oe,o),t(s,As,o),n(As,Sn),t(s,Te,o),t(s,Es,o),n(Es,Ls),n(Ls,kn),t(s,Re,o),v(es,s,o),t(s,Fs,o),n(Fs,Dn),t(s,Pe,o),t(s,R,o),v(H,R,null),n(R,On),t(s,Ge,o),t(s,hs,o),n(hs,Tn),t(s,Ve,o),t(s,x,o),n(x,Ws),n(Ws,_s),n(_s,js),n(js,Rn),n(_s,Pn),n(x,Gn),n(x,Ms),n(Ms,Y),n(Y,Us),n(Us,Vn),n(Y,qn),n(Y,zs),n(zs,Nn),n(Y,In),n(x,Hn),n(x,Js),n(Js,_),n(_,Ks),n(Ks,Yn),n(_,Ln),n(_,Qs),n(Qs,Wn),n(_,jn),n(_,Xs),n(Xs,Mn),n(_,Un),n(_,Zs),n(Zs,zn),n(_,Jn),se=!0},p(s,[o]){(!se||o&1)&&c!==(c=s[0].title+"")&&zo(A,c);const ee={};o&2&&(ee.$$scope={dirty:o,ctx:s}),G.$set(ee);const ne={};o&2&&(ne.$$scope={dirty:o,ctx:s}),q.$set(ne);const oe={};o&2&&(oe.$$scope={dirty:o,ctx:s}),N.$set(oe);const le={};o&2&&(le.$$scope={dirty:o,ctx:s}),I.$set(le);const ae={};o&2&&(ae.$$scope={dirty:o,ctx:s}),H.$set(ae)},i(s){se||($(L.$$.fragment,s),$(W.$$.fragment,s),$(j.$$.fragment,s),$(M.$$.fragment,s),$(U.$$.fragment,s),$(G.$$.fragment,s),$(z.$$.fragment,s),$(q.$$.fragment,s),$(J.$$.fragment,s),$(N.$$.fragment,s),$(K.$$.fragment,s),$(I.$$.fragment,s),$(Q.$$.fragment,s),$(X.$$.fragment,s),$(Z.$$.fragment,s),$(ss.$$.fragment,s),$(es.$$.fragment,s),$(H.$$.fragment,s),se=!0)},o(s){m(L.$$.fragment,s),m(W.$$.fragment,s),m(j.$$.fragment,s),m(M.$$.fragment,s),m(U.$$.fragment,s),m(G.$$.fragment,s),m(z.$$.fragment,s),m(q.$$.fragment,s),m(J.$$.fragment,s),m(N.$$.fragment,s),m(K.$$.fragment,s),m(I.$$.fragment,s),m(Q.$$.fragment,s),m(X.$$.fragment,s),m(Z.$$.fragment,s),m(ss.$$.fragment,s),m(es.$$.fragment,s),m(H.$$.fragment,s),se=!1},d(s){s&&e(f),s&&e(ns),s&&e(os),s&&e(re),s&&e(ls),s&&e(ie),s&&e(as),s&&e(ce),s&&e(ts),s&&e(fe),s&&e(ps),s&&e(Be),s&&e(rs),s&&e(de),g(L,s),s&&e(is),s&&e(ye),g(W,s),s&&e(cs),s&&e(ue),g(j,s),s&&e(fs),s&&e(ve),g(M,s),s&&e(Bs),s&&e($e),g(U,s),s&&e(ds),s&&e(me),s&&e(k),g(G),s&&e(ge),s&&e(V),s&&e(Ae),g(z,s),s&&e(D),g(q),s&&e(Ee),g(J,s),s&&e(w),s&&e(Fe),s&&e(ys),s&&e(he),s&&e(us),s&&e(_e),s&&e(O),g(N),s&&e(we),g(K,s),s&&e(T),g(I),s&&e(Ce),s&&e(vs),s&&e(xe),g(Q,s),s&&e(C),s&&e(be),s&&e($s),s&&e(Se),g(X,s),s&&e(ms),s&&e(ke),g(Z,s),s&&e(gs),s&&e(De),g(ss,s),s&&e(F),s&&e(Oe),s&&e(As),s&&e(Te),s&&e(Es),s&&e(Re),g(es,s),s&&e(Fs),s&&e(Pe),s&&e(R),g(H),s&&e(Ge),s&&e(hs),s&&e(Ve),s&&e(x)}}}function ol(E,f,c){let A;return Jo(E,Ko,ns=>c(0,A=ns)),[A]}class cl extends jo{constructor(f){super(),Mo(this,f,ol,nl,Uo,{})}}export{cl as default};