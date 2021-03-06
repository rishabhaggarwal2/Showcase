/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('ymaaSPA', [
  'ngRoute', 'firebase'
]);

var eventList = 
  [{"id":1,"name":"Robel, Gaylord and Kris","location":"3 Sullivan Way","date":"08-Jan-2016","time":"2:41 PM","fburl":"http://nifty.com/sollicitudin/mi/sit/amet/lobortis.aspx?tortor=vivamus\u0026sollicitudin=vel\u0026mi=nulla\u0026sit=eget\u0026amet=eros\u0026lobortis=elementum\u0026sapien=pellentesque\u0026sapien=quisque\u0026non=porta\u0026mi=volutpat\u0026integer=erat\u0026ac=quisque\u0026neque=erat\u0026duis=eros\u0026bibendum=viverra\u0026morbi=eget\u0026non=congue\u0026quam=eget\u0026nec=semper\u0026dui=rutrum\u0026luctus=nulla\u0026rutrum=nunc\u0026nulla=purus\u0026tellus=phasellus\u0026in=in\u0026sagittis=felis\u0026dui=donec"},
  {"id":2,"name":"Collier Inc","location":"92418 Goodland Avenue","date":"19-Sep-2015","time":"3:00 AM","fburl":"http://wisc.edu/posuere/cubilia/curae/donec/pharetra/magna/vestibulum.json?magna=quam\u0026vestibulum=sollicitudin\u0026aliquet=vitae"},
  {"id":3,"name":"Heller-Carroll","location":"59231 Village Terrace","date":"03-Jun-2016","time":"12:17 PM","fburl":"http://com.com/euismod/scelerisque/quam/turpis/adipiscing/lorem/vitae.jsp?eu=non\u0026magna=mattis\u0026vulputate=pulvinar\u0026luctus=nulla\u0026cum=pede\u0026sociis=ullamcorper\u0026natoque=augue\u0026penatibus=a\u0026et=suscipit\u0026magnis=nulla\u0026dis=elit\u0026parturient=ac\u0026montes=nulla\u0026nascetur=sed\u0026ridiculus=vel\u0026mus=enim\u0026vivamus=sit\u0026vestibulum=amet\u0026sagittis=nunc\u0026sapien=viverra\u0026cum=dapibus\u0026sociis=nulla\u0026natoque=suscipit\u0026penatibus=ligula\u0026et=in\u0026magnis=lacus\u0026dis=curabitur\u0026parturient=at\u0026montes=ipsum\u0026nascetur=ac\u0026ridiculus=tellus\u0026mus=semper\u0026etiam=interdum"},
  {"id":4,"name":"Bogan LLC","location":"7 Garrison Parkway","date":"21-Sep-2015","time":"9:54 AM","fburl":"https://icq.com/in/tempus/sit/amet/sem/fusce/consequat.html?ut=nulla"},
  {"id":5,"name":"Shields and Sons","location":"575 Dexter Parkway","date":"10-Jun-2016","time":"9:31 PM","fburl":"https://businessweek.com/sed/sagittis/nam/congue.xml?maecenas=sit\u0026tristique=amet\u0026est=eros\u0026et=suspendisse\u0026tempus=accumsan\u0026semper=tortor\u0026est=quis\u0026quam=turpis\u0026pharetra=sed\u0026magna=ante\u0026ac=vivamus\u0026consequat=tortor\u0026metus=duis\u0026sapien=mattis\u0026ut=egestas\u0026nunc=metus\u0026vestibulum=aenean\u0026ante=fermentum\u0026ipsum=donec\u0026primis=ut\u0026in=mauris\u0026faucibus=eget\u0026orci=massa\u0026luctus=tempor\u0026et=convallis\u0026ultrices=nulla\u0026posuere=neque\u0026cubilia=libero\u0026curae=convallis\u0026mauris=eget\u0026viverra=eleifend\u0026diam=luctus\u0026vitae=ultricies\u0026quam=eu\u0026suspendisse=nibh\u0026potenti=quisque\u0026nullam=id\u0026porttitor=justo\u0026lacus=sit\u0026at=amet\u0026turpis=sapien\u0026donec=dignissim\u0026posuere=vestibulum\u0026metus=vestibulum\u0026vitae=ante\u0026ipsum=ipsum\u0026aliquam=primis\u0026non=in\u0026mauris=faucibus\u0026morbi=orci\u0026non=luctus\u0026lectus=et\u0026aliquam=ultrices\u0026sit=posuere\u0026amet=cubilia\u0026diam=curae\u0026in=nulla\u0026magna=dapibus\u0026bibendum=dolor\u0026imperdiet=vel\u0026nullam=est\u0026orci=donec\u0026pede=odio\u0026venenatis=justo\u0026non=sollicitudin\u0026sodales=ut\u0026sed=suscipit\u0026tincidunt=a\u0026eu=feugiat\u0026felis=et\u0026fusce=eros\u0026posuere=vestibulum\u0026felis=ac\u0026sed=est\u0026lacus=lacinia\u0026morbi=nisi\u0026sem=venenatis\u0026mauris=tristique\u0026laoreet=fusce\u0026ut=congue\u0026rhoncus=diam\u0026aliquet=id\u0026pulvinar=ornare\u0026sed=imperdiet\u0026nisl=sapien\u0026nunc=urna\u0026rhoncus=pretium\u0026dui=nisl\u0026vel=ut\u0026sem=volutpat\u0026sed=sapien\u0026sagittis=arcu\u0026nam=sed\u0026congue=augue\u0026risus=aliquam\u0026semper=erat\u0026porta=volutpat"},
  {"id":6,"name":"Moen-Bechtelar","location":"25401 Montana Park","date":"08-Jun-2016","time":"1:43 PM","fburl":"https://ucla.edu/posuere.jpg?metus=platea\u0026vitae=dictumst\u0026ipsum=maecenas\u0026aliquam=ut\u0026non=massa\u0026mauris=quis\u0026morbi=augue\u0026non=luctus\u0026lectus=tincidunt\u0026aliquam=nulla\u0026sit=mollis\u0026amet=molestie\u0026diam=lorem\u0026in=quisque\u0026magna=ut\u0026bibendum=erat\u0026imperdiet=curabitur\u0026nullam=gravida\u0026orci=nisi\u0026pede=at\u0026venenatis=nibh\u0026non=in\u0026sodales=hac\u0026sed=habitasse\u0026tincidunt=platea\u0026eu=dictumst\u0026felis=aliquam\u0026fusce=augue\u0026posuere=quam\u0026felis=sollicitudin\u0026sed=vitae\u0026lacus=consectetuer\u0026morbi=eget"},
  {"id":7,"name":"Labadie and Sons","location":"711 Michigan Lane","date":"26-Mar-2016","time":"8:20 AM","fburl":"http://sakura.ne.jp/lacus/morbi/quis/tortor.html?nunc=nisi\u0026nisl=vulputate\u0026duis=nonummy\u0026bibendum=maecenas\u0026felis=tincidunt\u0026sed=lacus\u0026interdum=at\u0026venenatis=velit\u0026turpis=vivamus\u0026enim=vel\u0026blandit=nulla\u0026mi=eget\u0026in=eros\u0026porttitor=elementum\u0026pede=pellentesque\u0026justo=quisque\u0026eu=porta\u0026massa=volutpat\u0026donec=erat\u0026dapibus=quisque\u0026duis=erat\u0026at=eros\u0026velit=viverra\u0026eu=eget\u0026est=congue\u0026congue=eget\u0026elementum=semper\u0026in=rutrum\u0026hac=nulla\u0026habitasse=nunc\u0026platea=purus\u0026dictumst=phasellus\u0026morbi=in\u0026vestibulum=felis\u0026velit=donec\u0026id=semper\u0026pretium=sapien\u0026iaculis=a\u0026diam=libero\u0026erat=nam\u0026fermentum=dui\u0026justo=proin\u0026nec=leo\u0026condimentum=odio\u0026neque=porttitor\u0026sapien=id\u0026placerat=consequat\u0026ante=in\u0026nulla=consequat\u0026justo=ut\u0026aliquam=nulla\u0026quis=sed\u0026turpis=accumsan\u0026eget=felis\u0026elit=ut\u0026sodales=at\u0026scelerisque=dolor\u0026mauris=quis\u0026sit=odio\u0026amet=consequat\u0026eros=varius\u0026suspendisse=integer\u0026accumsan=ac\u0026tortor=leo\u0026quis=pellentesque\u0026turpis=ultrices\u0026sed=mattis\u0026ante=odio\u0026vivamus=donec\u0026tortor=vitae\u0026duis=nisi\u0026mattis=nam\u0026egestas=ultrices\u0026metus=libero\u0026aenean=non\u0026fermentum=mattis\u0026donec=pulvinar\u0026ut=nulla\u0026mauris=pede\u0026eget=ullamcorper\u0026massa=augue\u0026tempor=a\u0026convallis=suscipit\u0026nulla=nulla"},
  {"id":8,"name":"Will-Auer","location":"67524 Susan Road","date":"10-Jun-2016","time":"9:27 PM","fburl":"http://un.org/ut/volutpat/sapien/arcu.xml?dapibus=vestibulum\u0026dolor=ante\u0026vel=ipsum\u0026est=primis\u0026donec=in\u0026odio=faucibus\u0026justo=orci\u0026sollicitudin=luctus\u0026ut=et\u0026suscipit=ultrices\u0026a=posuere\u0026feugiat=cubilia\u0026et=curae\u0026eros=donec\u0026vestibulum=pharetra\u0026ac=magna\u0026est=vestibulum\u0026lacinia=aliquet\u0026nisi=ultrices\u0026venenatis=erat\u0026tristique=tortor\u0026fusce=sollicitudin\u0026congue=mi\u0026diam=sit\u0026id=amet\u0026ornare=lobortis\u0026imperdiet=sapien\u0026sapien=sapien\u0026urna=non\u0026pretium=mi\u0026nisl=integer\u0026ut=ac\u0026volutpat=neque\u0026sapien=duis\u0026arcu=bibendum\u0026sed=morbi\u0026augue=non\u0026aliquam=quam\u0026erat=nec\u0026volutpat=dui\u0026in=luctus\u0026congue=rutrum\u0026etiam=nulla\u0026justo=tellus\u0026etiam=in\u0026pretium=sagittis\u0026iaculis=dui\u0026justo=vel\u0026in=nisl\u0026hac=duis"},
  {"id":9,"name":"Mante, Bosco and Upton","location":"30 Bashford Crossing","date":"22-Aug-2016","time":"5:33 AM","fburl":"http://imgur.com/tincidunt/nulla/mollis/molestie/lorem/quisque.xml?massa=leo\u0026volutpat=pellentesque\u0026convallis=ultrices\u0026morbi=mattis\u0026odio=odio\u0026odio=donec\u0026elementum=vitae\u0026eu=nisi\u0026interdum=nam\u0026eu=ultrices\u0026tincidunt=libero\u0026in=non\u0026leo=mattis\u0026maecenas=pulvinar\u0026pulvinar=nulla\u0026lobortis=pede\u0026est=ullamcorper\u0026phasellus=augue\u0026sit=a\u0026amet=suscipit\u0026erat=nulla\u0026nulla=elit\u0026tempus=ac\u0026vivamus=nulla\u0026in=sed\u0026felis=vel\u0026eu=enim\u0026sapien=sit\u0026cursus=amet\u0026vestibulum=nunc\u0026proin=viverra\u0026eu=dapibus\u0026mi=nulla\u0026nulla=suscipit\u0026ac=ligula\u0026enim=in\u0026in=lacus"},
  {"id":10,"name":"Lind, Witting and Baumbach","location":"76836 Dawn Avenue","date":"07-Jun-2016","time":"4:18 AM","fburl":"https://1und1.de/rhoncus/aliquam/lacus/morbi/quis.xml?lorem=pellentesque\u0026id=at\u0026ligula=nulla\u0026suspendisse=suspendisse\u0026ornare=potenti\u0026consequat=cras\u0026lectus=in\u0026in=purus\u0026est=eu\u0026risus=magna\u0026auctor=vulputate\u0026sed=luctus\u0026tristique=cum\u0026in=sociis\u0026tempus=natoque\u0026sit=penatibus\u0026amet=et\u0026sem=magnis\u0026fusce=dis\u0026consequat=parturient\u0026nulla=montes\u0026nisl=nascetur\u0026nunc=ridiculus\u0026nisl=mus\u0026duis=vivamus\u0026bibendum=vestibulum\u0026felis=sagittis\u0026sed=sapien\u0026interdum=cum\u0026venenatis=sociis\u0026turpis=natoque\u0026enim=penatibus\u0026blandit=et\u0026mi=magnis\u0026in=dis\u0026porttitor=parturient\u0026pede=montes\u0026justo=nascetur\u0026eu=ridiculus\u0026massa=mus\u0026donec=etiam\u0026dapibus=vel\u0026duis=augue\u0026at=vestibulum\u0026velit=rutrum\u0026eu=rutrum\u0026est=neque\u0026congue=aenean\u0026elementum=auctor\u0026in=gravida\u0026hac=sem\u0026habitasse=praesent\u0026platea=id\u0026dictumst=massa\u0026morbi=id\u0026vestibulum=nisl\u0026velit=venenatis\u0026id=lacinia\u0026pretium=aenean\u0026iaculis=sit\u0026diam=amet\u0026erat=justo\u0026fermentum=morbi\u0026justo=ut\u0026nec=odio\u0026condimentum=cras\u0026neque=mi\u0026sapien=pede\u0026placerat=malesuada\u0026ante=in\u0026nulla=imperdiet\u0026justo=et\u0026aliquam=commodo\u0026quis=vulputate\u0026turpis=justo\u0026eget=in"},
  {"id":11,"name":"Schultz, Effertz and Wilderman","location":"7 Dunning Park","date":"29-Jun-2016","time":"2:30 PM","fburl":"https://cnn.com/integer/tincidunt/ante.jsp?sem=odio\u0026mauris=donec\u0026laoreet=vitae\u0026ut=nisi\u0026rhoncus=nam\u0026aliquet=ultrices\u0026pulvinar=libero\u0026sed=non\u0026nisl=mattis\u0026nunc=pulvinar\u0026rhoncus=nulla\u0026dui=pede\u0026vel=ullamcorper\u0026sem=augue\u0026sed=a\u0026sagittis=suscipit\u0026nam=nulla\u0026congue=elit\u0026risus=ac\u0026semper=nulla\u0026porta=sed\u0026volutpat=vel\u0026quam=enim\u0026pede=sit\u0026lobortis=amet\u0026ligula=nunc\u0026sit=viverra\u0026amet=dapibus\u0026eleifend=nulla\u0026pede=suscipit\u0026libero=ligula\u0026quis=in\u0026orci=lacus\u0026nullam=curabitur\u0026molestie=at\u0026nibh=ipsum\u0026in=ac\u0026lectus=tellus\u0026pellentesque=semper\u0026at=interdum"},
  {"id":12,"name":"Robel, Halvorson and Christiansen","location":"46577 Clove Point","date":"18-Nov-2015","time":"12:05 PM","fburl":"https://techcrunch.com/rutrum/nulla/nunc/purus/phasellus/in.jpg?sapien=ipsum\u0026quis=integer\u0026libero=a\u0026nullam=nibh\u0026sit=in\u0026amet=quis\u0026turpis=justo\u0026elementum=maecenas\u0026ligula=rhoncus\u0026vehicula=aliquam\u0026consequat=lacus\u0026morbi=morbi\u0026a=quis\u0026ipsum=tortor\u0026integer=id\u0026a=nulla\u0026nibh=ultrices\u0026in=aliquet\u0026quis=maecenas\u0026justo=leo\u0026maecenas=odio\u0026rhoncus=condimentum\u0026aliquam=id\u0026lacus=luctus\u0026morbi=nec\u0026quis=molestie\u0026tortor=sed\u0026id=justo\u0026nulla=pellentesque\u0026ultrices=viverra\u0026aliquet=pede\u0026maecenas=ac\u0026leo=diam\u0026odio=cras\u0026condimentum=pellentesque\u0026id=volutpat\u0026luctus=dui\u0026nec=maecenas\u0026molestie=tristique\u0026sed=est\u0026justo=et\u0026pellentesque=tempus\u0026viverra=semper\u0026pede=est\u0026ac=quam\u0026diam=pharetra\u0026cras=magna\u0026pellentesque=ac\u0026volutpat=consequat\u0026dui=metus\u0026maecenas=sapien\u0026tristique=ut\u0026est=nunc\u0026et=vestibulum\u0026tempus=ante\u0026semper=ipsum\u0026est=primis\u0026quam=in\u0026pharetra=faucibus\u0026magna=orci\u0026ac=luctus\u0026consequat=et\u0026metus=ultrices\u0026sapien=posuere\u0026ut=cubilia\u0026nunc=curae\u0026vestibulum=mauris\u0026ante=viverra"},
  {"id":13,"name":"Carter and Sons","location":"4906 Prairie Rose Street","date":"23-Jun-2016","time":"8:41 PM","fburl":"http://clickbank.net/pellentesque/quisque/porta/volutpat/erat/quisque/erat.jpg?vivamus=cubilia\u0026vel=curae\u0026nulla=duis\u0026eget=faucibus\u0026eros=accumsan\u0026elementum=odio\u0026pellentesque=curabitur\u0026quisque=convallis\u0026porta=duis\u0026volutpat=consequat\u0026erat=dui\u0026quisque=nec\u0026erat=nisi\u0026eros=volutpat\u0026viverra=eleifend\u0026eget=donec\u0026congue=ut\u0026eget=dolor\u0026semper=morbi\u0026rutrum=vel\u0026nulla=lectus\u0026nunc=in\u0026purus=quam\u0026phasellus=fringilla\u0026in=rhoncus\u0026felis=mauris\u0026donec=enim\u0026semper=leo\u0026sapien=rhoncus\u0026a=sed\u0026libero=vestibulum\u0026nam=sit\u0026dui=amet\u0026proin=cursus\u0026leo=id\u0026odio=turpis\u0026porttitor=integer\u0026id=aliquet\u0026consequat=massa\u0026in=id\u0026consequat=lobortis\u0026ut=convallis\u0026nulla=tortor\u0026sed=risus\u0026accumsan=dapibus\u0026felis=augue\u0026ut=vel\u0026at=accumsan\u0026dolor=tellus\u0026quis=nisi\u0026odio=eu\u0026consequat=orci\u0026varius=mauris\u0026integer=lacinia\u0026ac=sapien\u0026leo=quis\u0026pellentesque=libero\u0026ultrices=nullam\u0026mattis=sit\u0026odio=amet\u0026donec=turpis\u0026vitae=elementum\u0026nisi=ligula\u0026nam=vehicula\u0026ultrices=consequat\u0026libero=morbi\u0026non=a\u0026mattis=ipsum\u0026pulvinar=integer\u0026nulla=a\u0026pede=nibh\u0026ullamcorper=in\u0026augue=quis"},
  {"id":14,"name":"Friesen and Sons","location":"691 Eagle Crest Junction","date":"28-Nov-2015","time":"5:11 AM","fburl":"http://4shared.com/ultricies/eu/nibh/quisque/id.json?platea=non\u0026dictumst=mi\u0026aliquam=integer\u0026augue=ac\u0026quam=neque\u0026sollicitudin=duis\u0026vitae=bibendum\u0026consectetuer=morbi\u0026eget=non\u0026rutrum=quam\u0026at=nec\u0026lorem=dui\u0026integer=luctus\u0026tincidunt=rutrum\u0026ante=nulla\u0026vel=tellus\u0026ipsum=in\u0026praesent=sagittis\u0026blandit=dui\u0026lacinia=vel\u0026erat=nisl\u0026vestibulum=duis\u0026sed=ac\u0026magna=nibh\u0026at=fusce\u0026nunc=lacus\u0026commodo=purus\u0026placerat=aliquet\u0026praesent=at\u0026blandit=feugiat\u0026nam=non\u0026nulla=pretium\u0026integer=quis\u0026pede=lectus\u0026justo=suspendisse\u0026lacinia=potenti\u0026eget=in\u0026tincidunt=eleifend\u0026eget=quam\u0026tempus=a\u0026vel=odio\u0026pede=in\u0026morbi=hac\u0026porttitor=habitasse\u0026lorem=platea\u0026id=dictumst\u0026ligula=maecenas\u0026suspendisse=ut\u0026ornare=massa\u0026consequat=quis\u0026lectus=augue\u0026in=luctus\u0026est=tincidunt\u0026risus=nulla\u0026auctor=mollis\u0026sed=molestie\u0026tristique=lorem\u0026in=quisque\u0026tempus=ut\u0026sit=erat\u0026amet=curabitur\u0026sem=gravida\u0026fusce=nisi\u0026consequat=at\u0026nulla=nibh\u0026nisl=in\u0026nunc=hac\u0026nisl=habitasse\u0026duis=platea\u0026bibendum=dictumst"},
  {"id":15,"name":"Stehr, Fritsch and Rutherford","location":"42755 Mandrake Hill","date":"22-Jun-2016","time":"10:45 PM","fburl":"https://goo.gl/cursus/urna/ut.jsp?nulla=ut\u0026integer=blandit\u0026pede=non\u0026justo=interdum\u0026lacinia=in\u0026eget=ante\u0026tincidunt=vestibulum\u0026eget=ante\u0026tempus=ipsum\u0026vel=primis\u0026pede=in\u0026morbi=faucibus\u0026porttitor=orci\u0026lorem=luctus\u0026id=et\u0026ligula=ultrices\u0026suspendisse=posuere\u0026ornare=cubilia\u0026consequat=curae\u0026lectus=duis\u0026in=faucibus\u0026est=accumsan\u0026risus=odio\u0026auctor=curabitur\u0026sed=convallis\u0026tristique=duis\u0026in=consequat\u0026tempus=dui\u0026sit=nec\u0026amet=nisi\u0026sem=volutpat\u0026fusce=eleifend\u0026consequat=donec\u0026nulla=ut\u0026nisl=dolor\u0026nunc=morbi\u0026nisl=vel\u0026duis=lectus\u0026bibendum=in\u0026felis=quam\u0026sed=fringilla\u0026interdum=rhoncus\u0026venenatis=mauris\u0026turpis=enim\u0026enim=leo\u0026blandit=rhoncus\u0026mi=sed\u0026in=vestibulum\u0026porttitor=sit\u0026pede=amet\u0026justo=cursus\u0026eu=id\u0026massa=turpis\u0026donec=integer\u0026dapibus=aliquet\u0026duis=massa\u0026at=id\u0026velit=lobortis\u0026eu=convallis\u0026est=tortor\u0026congue=risus\u0026elementum=dapibus"},
  {"id":16,"name":"Legros-Lakin","location":"66983 Clemons Plaza","date":"30-May-2016","time":"10:06 AM","fburl":"http://google.co.uk/nulla.jpg?nisl=at\u0026nunc=nibh\u0026nisl=in\u0026duis=hac\u0026bibendum=habitasse\u0026felis=platea\u0026sed=dictumst\u0026interdum=aliquam\u0026venenatis=augue\u0026turpis=quam\u0026enim=sollicitudin\u0026blandit=vitae\u0026mi=consectetuer\u0026in=eget\u0026porttitor=rutrum\u0026pede=at\u0026justo=lorem\u0026eu=integer\u0026massa=tincidunt\u0026donec=ante\u0026dapibus=vel\u0026duis=ipsum\u0026at=praesent\u0026velit=blandit\u0026eu=lacinia\u0026est=erat\u0026congue=vestibulum\u0026elementum=sed\u0026in=magna\u0026hac=at\u0026habitasse=nunc\u0026platea=commodo\u0026dictumst=placerat\u0026morbi=praesent\u0026vestibulum=blandit\u0026velit=nam\u0026id=nulla\u0026pretium=integer\u0026iaculis=pede\u0026diam=justo\u0026erat=lacinia\u0026fermentum=eget\u0026justo=tincidunt\u0026nec=eget\u0026condimentum=tempus\u0026neque=vel\u0026sapien=pede\u0026placerat=morbi\u0026ante=porttitor\u0026nulla=lorem\u0026justo=id\u0026aliquam=ligula\u0026quis=suspendisse\u0026turpis=ornare\u0026eget=consequat\u0026elit=lectus\u0026sodales=in\u0026scelerisque=est\u0026mauris=risus\u0026sit=auctor\u0026amet=sed\u0026eros=tristique\u0026suspendisse=in\u0026accumsan=tempus\u0026tortor=sit\u0026quis=amet\u0026turpis=sem\u0026sed=fusce\u0026ante=consequat\u0026vivamus=nulla\u0026tortor=nisl\u0026duis=nunc\u0026mattis=nisl\u0026egestas=duis\u0026metus=bibendum\u0026aenean=felis\u0026fermentum=sed\u0026donec=interdum\u0026ut=venenatis\u0026mauris=turpis\u0026eget=enim\u0026massa=blandit\u0026tempor=mi\u0026convallis=in\u0026nulla=porttitor"},
  {"id":17,"name":"Rath, Lueilwitz and Wisozk","location":"6 Sloan Crossing","date":"24-Jun-2016","time":"9:46 PM","fburl":"https://nydailynews.com/consequat/dui/nec/nisi/volutpat/eleifend/donec.png?a=penatibus\u0026odio=et\u0026in=magnis\u0026hac=dis\u0026habitasse=parturient\u0026platea=montes\u0026dictumst=nascetur\u0026maecenas=ridiculus\u0026ut=mus\u0026massa=etiam\u0026quis=vel\u0026augue=augue\u0026luctus=vestibulum\u0026tincidunt=rutrum\u0026nulla=rutrum\u0026mollis=neque\u0026molestie=aenean\u0026lorem=auctor\u0026quisque=gravida\u0026ut=sem\u0026erat=praesent\u0026curabitur=id\u0026gravida=massa\u0026nisi=id\u0026at=nisl\u0026nibh=venenatis\u0026in=lacinia\u0026hac=aenean\u0026habitasse=sit\u0026platea=amet\u0026dictumst=justo\u0026aliquam=morbi\u0026augue=ut"},
  {"id":18,"name":"Purdy Group","location":"65 Village Green Avenue","date":"30-Oct-2015","time":"5:45 AM","fburl":"https://hexun.com/platea/dictumst/maecenas/ut/massa.png?cras=quis\u0026mi=libero\u0026pede=nullam\u0026malesuada=sit\u0026in=amet\u0026imperdiet=turpis\u0026et=elementum\u0026commodo=ligula\u0026vulputate=vehicula\u0026justo=consequat\u0026in=morbi\u0026blandit=a"},
  {"id":19,"name":"MacGyver-Crooks","location":"7566 Caliangt Plaza","date":"23-Oct-2015","time":"9:58 PM","fburl":"https://paginegialle.it/vehicula/consequat/morbi/a/ipsum/integer/a.json?felis=lorem\u0026sed=vitae\u0026lacus=mattis\u0026morbi=nibh\u0026sem=ligula\u0026mauris=nec\u0026laoreet=sem\u0026ut=duis\u0026rhoncus=aliquam\u0026aliquet=convallis\u0026pulvinar=nunc\u0026sed=proin\u0026nisl=at\u0026nunc=turpis\u0026rhoncus=a\u0026dui=pede\u0026vel=posuere\u0026sem=nonummy\u0026sed=integer\u0026sagittis=non\u0026nam=velit\u0026congue=donec\u0026risus=diam\u0026semper=neque\u0026porta=vestibulum\u0026volutpat=eget\u0026quam=vulputate\u0026pede=ut\u0026lobortis=ultrices\u0026ligula=vel\u0026sit=augue\u0026amet=vestibulum\u0026eleifend=ante\u0026pede=ipsum\u0026libero=primis\u0026quis=in\u0026orci=faucibus\u0026nullam=orci\u0026molestie=luctus\u0026nibh=et\u0026in=ultrices\u0026lectus=posuere\u0026pellentesque=cubilia\u0026at=curae\u0026nulla=donec\u0026suspendisse=pharetra\u0026potenti=magna\u0026cras=vestibulum\u0026in=aliquet\u0026purus=ultrices\u0026eu=erat\u0026magna=tortor\u0026vulputate=sollicitudin\u0026luctus=mi\u0026cum=sit\u0026sociis=amet\u0026natoque=lobortis\u0026penatibus=sapien\u0026et=sapien\u0026magnis=non\u0026dis=mi\u0026parturient=integer\u0026montes=ac\u0026nascetur=neque\u0026ridiculus=duis\u0026mus=bibendum\u0026vivamus=morbi\u0026vestibulum=non"},
  {"id":20,"name":"Hane-Mills","location":"0 Forest Run Trail","date":"31-Oct-2015","time":"4:32 PM","fburl":"http://dell.com/montes/nascetur/ridiculus/mus.js?lectus=maecenas\u0026aliquam=rhoncus\u0026sit=aliquam\u0026amet=lacus\u0026diam=morbi\u0026in=quis\u0026magna=tortor\u0026bibendum=id\u0026imperdiet=nulla\u0026nullam=ultrices\u0026orci=aliquet\u0026pede=maecenas\u0026venenatis=leo\u0026non=odio\u0026sodales=condimentum\u0026sed=id\u0026tincidunt=luctus\u0026eu=nec\u0026felis=molestie\u0026fusce=sed\u0026posuere=justo\u0026felis=pellentesque\u0026sed=viverra\u0026lacus=pede\u0026morbi=ac\u0026sem=diam\u0026mauris=cras\u0026laoreet=pellentesque\u0026ut=volutpat\u0026rhoncus=dui"},
  {"id":21,"name":"Connelly and Sons","location":"32570 Waywood Place","date":"20-Aug-2016","time":"7:22 PM","fburl":"https://hao123.com/et/tempus/semper/est.jpg?donec=sociis\u0026odio=natoque\u0026justo=penatibus\u0026sollicitudin=et\u0026ut=magnis\u0026suscipit=dis\u0026a=parturient\u0026feugiat=montes\u0026et=nascetur\u0026eros=ridiculus\u0026vestibulum=mus\u0026ac=etiam\u0026est=vel\u0026lacinia=augue\u0026nisi=vestibulum\u0026venenatis=rutrum\u0026tristique=rutrum\u0026fusce=neque\u0026congue=aenean\u0026diam=auctor\u0026id=gravida\u0026ornare=sem\u0026imperdiet=praesent\u0026sapien=id\u0026urna=massa\u0026pretium=id\u0026nisl=nisl\u0026ut=venenatis\u0026volutpat=lacinia\u0026sapien=aenean\u0026arcu=sit\u0026sed=amet\u0026augue=justo\u0026aliquam=morbi\u0026erat=ut\u0026volutpat=odio\u0026in=cras\u0026congue=mi\u0026etiam=pede\u0026justo=malesuada\u0026etiam=in\u0026pretium=imperdiet\u0026iaculis=et\u0026justo=commodo\u0026in=vulputate\u0026hac=justo\u0026habitasse=in\u0026platea=blandit\u0026dictumst=ultrices\u0026etiam=enim\u0026faucibus=lorem\u0026cursus=ipsum\u0026urna=dolor\u0026ut=sit\u0026tellus=amet\u0026nulla=consectetuer\u0026ut=adipiscing\u0026erat=elit\u0026id=proin\u0026mauris=interdum\u0026vulputate=mauris\u0026elementum=non\u0026nullam=ligula\u0026varius=pellentesque\u0026nulla=ultrices\u0026facilisi=phasellus\u0026cras=id\u0026non=sapien\u0026velit=in\u0026nec=sapien\u0026nisi=iaculis\u0026vulputate=congue\u0026nonummy=vivamus\u0026maecenas=metus\u0026tincidunt=arcu\u0026lacus=adipiscing\u0026at=molestie\u0026velit=hendrerit\u0026vivamus=at\u0026vel=vulputate\u0026nulla=vitae\u0026eget=nisl\u0026eros=aenean\u0026elementum=lectus\u0026pellentesque=pellentesque\u0026quisque=eget\u0026porta=nunc\u0026volutpat=donec\u0026erat=quis\u0026quisque=orci\u0026erat=eget\u0026eros=orci\u0026viverra=vehicula\u0026eget=condimentum\u0026congue=curabitur\u0026eget=in\u0026semper=libero\u0026rutrum=ut\u0026nulla=massa"},
  {"id":22,"name":"Gerhold, MacGyver and Block","location":"0428 Florence Trail","date":"21-Sep-2015","time":"2:02 PM","fburl":"http://phpbb.com/arcu/sed/augue/aliquam/erat.png?lectus=cras\u0026vestibulum=mi\u0026quam=pede\u0026sapien=malesuada\u0026varius=in\u0026ut=imperdiet\u0026blandit=et\u0026non=commodo\u0026interdum=vulputate\u0026in=justo\u0026ante=in\u0026vestibulum=blandit\u0026ante=ultrices\u0026ipsum=enim\u0026primis=lorem\u0026in=ipsum\u0026faucibus=dolor\u0026orci=sit\u0026luctus=amet\u0026et=consectetuer\u0026ultrices=adipiscing\u0026posuere=elit\u0026cubilia=proin\u0026curae=interdum\u0026duis=mauris\u0026faucibus=non\u0026accumsan=ligula\u0026odio=pellentesque\u0026curabitur=ultrices\u0026convallis=phasellus\u0026duis=id\u0026consequat=sapien\u0026dui=in\u0026nec=sapien\u0026nisi=iaculis\u0026volutpat=congue\u0026eleifend=vivamus\u0026donec=metus\u0026ut=arcu\u0026dolor=adipiscing\u0026morbi=molestie\u0026vel=hendrerit\u0026lectus=at\u0026in=vulputate\u0026quam=vitae\u0026fringilla=nisl\u0026rhoncus=aenean\u0026mauris=lectus\u0026enim=pellentesque\u0026leo=eget\u0026rhoncus=nunc\u0026sed=donec\u0026vestibulum=quis\u0026sit=orci\u0026amet=eget\u0026cursus=orci\u0026id=vehicula\u0026turpis=condimentum\u0026integer=curabitur\u0026aliquet=in\u0026massa=libero\u0026id=ut\u0026lobortis=massa\u0026convallis=volutpat\u0026tortor=convallis\u0026risus=morbi\u0026dapibus=odio\u0026augue=odio\u0026vel=elementum\u0026accumsan=eu\u0026tellus=interdum\u0026nisi=eu\u0026eu=tincidunt\u0026orci=in\u0026mauris=leo\u0026lacinia=maecenas\u0026sapien=pulvinar\u0026quis=lobortis\u0026libero=est\u0026nullam=phasellus\u0026sit=sit\u0026amet=amet\u0026turpis=erat\u0026elementum=nulla"},
  {"id":23,"name":"Kassulke, Nader and Carroll","location":"6756 Toban Junction","date":"13-Jul-2016","time":"4:14 AM","fburl":"https://state.gov/mauris.html?est=consectetuer\u0026risus=adipiscing\u0026auctor=elit\u0026sed=proin\u0026tristique=interdum\u0026in=mauris\u0026tempus=non\u0026sit=ligula\u0026amet=pellentesque\u0026sem=ultrices\u0026fusce=phasellus\u0026consequat=id\u0026nulla=sapien\u0026nisl=in\u0026nunc=sapien\u0026nisl=iaculis\u0026duis=congue\u0026bibendum=vivamus\u0026felis=metus\u0026sed=arcu\u0026interdum=adipiscing\u0026venenatis=molestie\u0026turpis=hendrerit\u0026enim=at\u0026blandit=vulputate\u0026mi=vitae\u0026in=nisl\u0026porttitor=aenean\u0026pede=lectus\u0026justo=pellentesque\u0026eu=eget\u0026massa=nunc\u0026donec=donec\u0026dapibus=quis\u0026duis=orci\u0026at=eget\u0026velit=orci\u0026eu=vehicula\u0026est=condimentum\u0026congue=curabitur\u0026elementum=in\u0026in=libero\u0026hac=ut\u0026habitasse=massa\u0026platea=volutpat\u0026dictumst=convallis\u0026morbi=morbi\u0026vestibulum=odio\u0026velit=odio\u0026id=elementum\u0026pretium=eu\u0026iaculis=interdum\u0026diam=eu\u0026erat=tincidunt\u0026fermentum=in\u0026justo=leo\u0026nec=maecenas\u0026condimentum=pulvinar\u0026neque=lobortis\u0026sapien=est\u0026placerat=phasellus\u0026ante=sit\u0026nulla=amet\u0026justo=erat\u0026aliquam=nulla\u0026quis=tempus\u0026turpis=vivamus\u0026eget=in\u0026elit=felis\u0026sodales=eu\u0026scelerisque=sapien\u0026mauris=cursus\u0026sit=vestibulum\u0026amet=proin\u0026eros=eu\u0026suspendisse=mi"},
  {"id":24,"name":"Schinner-Stroman","location":"51654 Burning Wood Plaza","date":"24-Jul-2016","time":"5:25 PM","fburl":"https://google.com.br/suspendisse/accumsan/tortor/quis/turpis.json?sapien=nisl\u0026dignissim=duis\u0026vestibulum=ac\u0026vestibulum=nibh\u0026ante=fusce\u0026ipsum=lacus\u0026primis=purus\u0026in=aliquet\u0026faucibus=at\u0026orci=feugiat\u0026luctus=non\u0026et=pretium\u0026ultrices=quis\u0026posuere=lectus\u0026cubilia=suspendisse\u0026curae=potenti\u0026nulla=in\u0026dapibus=eleifend\u0026dolor=quam\u0026vel=a\u0026est=odio\u0026donec=in\u0026odio=hac\u0026justo=habitasse\u0026sollicitudin=platea\u0026ut=dictumst\u0026suscipit=maecenas\u0026a=ut\u0026feugiat=massa\u0026et=quis\u0026eros=augue\u0026vestibulum=luctus\u0026ac=tincidunt\u0026est=nulla\u0026lacinia=mollis\u0026nisi=molestie\u0026venenatis=lorem\u0026tristique=quisque\u0026fusce=ut\u0026congue=erat\u0026diam=curabitur\u0026id=gravida\u0026ornare=nisi\u0026imperdiet=at\u0026sapien=nibh\u0026urna=in\u0026pretium=hac\u0026nisl=habitasse\u0026ut=platea\u0026volutpat=dictumst\u0026sapien=aliquam\u0026arcu=augue\u0026sed=quam\u0026augue=sollicitudin\u0026aliquam=vitae\u0026erat=consectetuer\u0026volutpat=eget\u0026in=rutrum\u0026congue=at\u0026etiam=lorem\u0026justo=integer\u0026etiam=tincidunt\u0026pretium=ante\u0026iaculis=vel\u0026justo=ipsum\u0026in=praesent\u0026hac=blandit\u0026habitasse=lacinia\u0026platea=erat\u0026dictumst=vestibulum\u0026etiam=sed"},
  {"id":25,"name":"Quitzon-Haley","location":"629 Duke Center","date":"29-Jun-2016","time":"4:52 PM","fburl":"http://netvibes.com/eget/elit/sodales.xml?rutrum=nullam\u0026at=molestie\u0026lorem=nibh\u0026integer=in\u0026tincidunt=lectus\u0026ante=pellentesque\u0026vel=at\u0026ipsum=nulla\u0026praesent=suspendisse\u0026blandit=potenti\u0026lacinia=cras\u0026erat=in\u0026vestibulum=purus\u0026sed=eu\u0026magna=magna\u0026at=vulputate\u0026nunc=luctus\u0026commodo=cum\u0026placerat=sociis\u0026praesent=natoque\u0026blandit=penatibus\u0026nam=et\u0026nulla=magnis\u0026integer=dis\u0026pede=parturient\u0026justo=montes\u0026lacinia=nascetur\u0026eget=ridiculus\u0026tincidunt=mus\u0026eget=vivamus\u0026tempus=vestibulum\u0026vel=sagittis\u0026pede=sapien\u0026morbi=cum\u0026porttitor=sociis\u0026lorem=natoque\u0026id=penatibus\u0026ligula=et\u0026suspendisse=magnis\u0026ornare=dis\u0026consequat=parturient\u0026lectus=montes\u0026in=nascetur\u0026est=ridiculus\u0026risus=mus\u0026auctor=etiam\u0026sed=vel\u0026tristique=augue\u0026in=vestibulum\u0026tempus=rutrum\u0026sit=rutrum\u0026amet=neque\u0026sem=aenean\u0026fusce=auctor\u0026consequat=gravida\u0026nulla=sem\u0026nisl=praesent\u0026nunc=id\u0026nisl=massa\u0026duis=id\u0026bibendum=nisl\u0026felis=venenatis\u0026sed=lacinia\u0026interdum=aenean\u0026venenatis=sit\u0026turpis=amet\u0026enim=justo\u0026blandit=morbi\u0026mi=ut\u0026in=odio\u0026porttitor=cras\u0026pede=mi\u0026justo=pede\u0026eu=malesuada\u0026massa=in\u0026donec=imperdiet\u0026dapibus=et\u0026duis=commodo\u0026at=vulputate\u0026velit=justo\u0026eu=in\u0026est=blandit\u0026congue=ultrices\u0026elementum=enim\u0026in=lorem\u0026hac=ipsum\u0026habitasse=dolor\u0026platea=sit\u0026dictumst=amet\u0026morbi=consectetuer\u0026vestibulum=adipiscing\u0026velit=elit\u0026id=proin\u0026pretium=interdum"},
  {"id":26,"name":"Legros-Kunze","location":"0582 Red Cloud Park","date":"31-Jan-2016","time":"7:15 PM","fburl":"http://homestead.com/dapibus/at/diam/nam/tristique/tortor/eu.png?justo=natoque\u0026sit=penatibus\u0026amet=et\u0026sapien=magnis\u0026dignissim=dis\u0026vestibulum=parturient\u0026vestibulum=montes\u0026ante=nascetur\u0026ipsum=ridiculus\u0026primis=mus\u0026in=etiam\u0026faucibus=vel\u0026orci=augue\u0026luctus=vestibulum\u0026et=rutrum\u0026ultrices=rutrum\u0026posuere=neque\u0026cubilia=aenean\u0026curae=auctor\u0026nulla=gravida\u0026dapibus=sem\u0026dolor=praesent\u0026vel=id\u0026est=massa\u0026donec=id\u0026odio=nisl\u0026justo=venenatis\u0026sollicitudin=lacinia\u0026ut=aenean\u0026suscipit=sit\u0026a=amet\u0026feugiat=justo\u0026et=morbi\u0026eros=ut\u0026vestibulum=odio\u0026ac=cras\u0026est=mi\u0026lacinia=pede"},
  {"id":27,"name":"Kiehn LLC","location":"60 Mayfield Circle","date":"13-Jun-2016","time":"5:16 AM","fburl":"http://army.mil/venenatis/non/sodales/sed/tincidunt/eu/felis.json?ac=quisque\u0026consequat=id\u0026metus=justo\u0026sapien=sit\u0026ut=amet\u0026nunc=sapien\u0026vestibulum=dignissim\u0026ante=vestibulum\u0026ipsum=vestibulum\u0026primis=ante\u0026in=ipsum\u0026faucibus=primis\u0026orci=in\u0026luctus=faucibus\u0026et=orci\u0026ultrices=luctus\u0026posuere=et\u0026cubilia=ultrices\u0026curae=posuere\u0026mauris=cubilia\u0026viverra=curae\u0026diam=nulla\u0026vitae=dapibus\u0026quam=dolor\u0026suspendisse=vel"},
  {"id":28,"name":"Medhurst, Morissette and Douglas","location":"445 Texas Junction","date":"06-Dec-2015","time":"1:01 PM","fburl":"https://nasa.gov/amet/cursus.html?sapien=justo\u0026cursus=sollicitudin\u0026vestibulum=ut\u0026proin=suscipit\u0026eu=a\u0026mi=feugiat\u0026nulla=et\u0026ac=eros\u0026enim=vestibulum\u0026in=ac\u0026tempor=est\u0026turpis=lacinia\u0026nec=nisi\u0026euismod=venenatis\u0026scelerisque=tristique\u0026quam=fusce\u0026turpis=congue\u0026adipiscing=diam\u0026lorem=id\u0026vitae=ornare\u0026mattis=imperdiet\u0026nibh=sapien\u0026ligula=urna\u0026nec=pretium\u0026sem=nisl\u0026duis=ut\u0026aliquam=volutpat\u0026convallis=sapien\u0026nunc=arcu\u0026proin=sed\u0026at=augue\u0026turpis=aliquam"},
  {"id":29,"name":"Schultz Group","location":"5534 Bunting Street","date":"17-Feb-2016","time":"4:28 AM","fburl":"https://dagondesign.com/porta.html?faucibus=aenean\u0026orci=lectus\u0026luctus=pellentesque\u0026et=eget\u0026ultrices=nunc\u0026posuere=donec\u0026cubilia=quis\u0026curae=orci\u0026donec=eget\u0026pharetra=orci\u0026magna=vehicula\u0026vestibulum=condimentum\u0026aliquet=curabitur\u0026ultrices=in\u0026erat=libero\u0026tortor=ut\u0026sollicitudin=massa\u0026mi=volutpat\u0026sit=convallis\u0026amet=morbi\u0026lobortis=odio\u0026sapien=odio\u0026sapien=elementum\u0026non=eu\u0026mi=interdum\u0026integer=eu\u0026ac=tincidunt\u0026neque=in\u0026duis=leo\u0026bibendum=maecenas\u0026morbi=pulvinar\u0026non=lobortis\u0026quam=est\u0026nec=phasellus\u0026dui=sit\u0026luctus=amet\u0026rutrum=erat\u0026nulla=nulla\u0026tellus=tempus\u0026in=vivamus\u0026sagittis=in\u0026dui=felis\u0026vel=eu\u0026nisl=sapien\u0026duis=cursus\u0026ac=vestibulum\u0026nibh=proin\u0026fusce=eu\u0026lacus=mi\u0026purus=nulla\u0026aliquet=ac\u0026at=enim\u0026feugiat=in\u0026non=tempor\u0026pretium=turpis\u0026quis=nec\u0026lectus=euismod\u0026suspendisse=scelerisque\u0026potenti=quam\u0026in=turpis\u0026eleifend=adipiscing\u0026quam=lorem\u0026a=vitae\u0026odio=mattis\u0026in=nibh\u0026hac=ligula\u0026habitasse=nec\u0026platea=sem\u0026dictumst=duis\u0026maecenas=aliquam\u0026ut=convallis\u0026massa=nunc\u0026quis=proin\u0026augue=at\u0026luctus=turpis\u0026tincidunt=a\u0026nulla=pede\u0026mollis=posuere\u0026molestie=nonummy\u0026lorem=integer\u0026quisque=non\u0026ut=velit"},
  {"id":30,"name":"Lesch LLC","location":"997 Artisan Junction","date":"14-Aug-2016","time":"1:04 PM","fburl":"http://goo.ne.jp/a/suscipit/nulla/elit/ac.js?pellentesque=in\u0026ultrices=tempor\u0026phasellus=turpis\u0026id=nec\u0026sapien=euismod\u0026in=scelerisque\u0026sapien=quam\u0026iaculis=turpis\u0026congue=adipiscing\u0026vivamus=lorem\u0026metus=vitae\u0026arcu=mattis\u0026adipiscing=nibh\u0026molestie=ligula\u0026hendrerit=nec\u0026at=sem\u0026vulputate=duis\u0026vitae=aliquam\u0026nisl=convallis\u0026aenean=nunc\u0026lectus=proin\u0026pellentesque=at\u0026eget=turpis\u0026nunc=a\u0026donec=pede\u0026quis=posuere\u0026orci=nonummy\u0026eget=integer\u0026orci=non\u0026vehicula=velit\u0026condimentum=donec\u0026curabitur=diam\u0026in=neque\u0026libero=vestibulum\u0026ut=eget\u0026massa=vulputate\u0026volutpat=ut\u0026convallis=ultrices\u0026morbi=vel\u0026odio=augue\u0026odio=vestibulum\u0026elementum=ante\u0026eu=ipsum\u0026interdum=primis\u0026eu=in\u0026tincidunt=faucibus\u0026in=orci\u0026leo=luctus\u0026maecenas=et\u0026pulvinar=ultrices\u0026lobortis=posuere\u0026est=cubilia\u0026phasellus=curae\u0026sit=donec\u0026amet=pharetra\u0026erat=magna\u0026nulla=vestibulum\u0026tempus=aliquet\u0026vivamus=ultrices\u0026in=erat\u0026felis=tortor\u0026eu=sollicitudin\u0026sapien=mi\u0026cursus=sit\u0026vestibulum=amet\u0026proin=lobortis\u0026eu=sapien\u0026mi=sapien\u0026nulla=non\u0026ac=mi\u0026enim=integer\u0026in=ac\u0026tempor=neque\u0026turpis=duis\u0026nec=bibendum\u0026euismod=morbi\u0026scelerisque=non\u0026quam=quam\u0026turpis=nec\u0026adipiscing=dui\u0026lorem=luctus\u0026vitae=rutrum\u0026mattis=nulla\u0026nibh=tellus\u0026ligula=in\u0026nec=sagittis\u0026sem=dui\u0026duis=vel"}];

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
    .when("/:event_name", {templateUrl: "../partials/event.html", controller: "EventCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/research", {templateUrl: "partials/research.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

function initCanvas(canvas, mapSizeRect){
  var grid = 20;
  this.canvas = canvas;

  $("#mapFile").change(function(){
    canvas.setBackgroundImage($(this).val(), canvas.renderAll.bind(canvas), {
      width: canvas.width,
      height: canvas.height
    });
  });

  canvas.add(mapSizeRect);
  mapSizeRect.on('moving', function(){
    t = this.top;
    l = this.left;
    if(this.top < 0)
      t = 0;
    if(this.left < 0)
      l = 0;
    if(this.left > 800 - this.width)
      l = 800 - this.width;
    if(this.top > 600 - this.height)
      t = 600 - this.height;

    t = Math.round(t/grid) * grid;
    l = Math.round(l/grid) * grid;

    this.set({
      'left' : l,
      'top' : t
    });
  });

  mapSizeRect.on('scaling', function() { 
    w = Math.round(this.width * this.scaleX / grid) * grid;
    h = Math.round(this.height * this.scaleY / grid) * grid;
    t = Math.round(this.top/grid) * grid;
    l = Math.round(this.left/grid) * grid;
    s = this.strokeWidth;

    this.set({
        'scaleX'     : 1,
        'scaleY'     : 1,
        'top' : t,
        'left'  : l
    });

    this.setWidth(w);
    this.setHeight(h);
  });
}

/**
 * Controls the Home
 */
app.controller('HomeCtrl', function ($scope, $firebaseArray/* $scope, $location, $http */) {
  var gridStore = "";
  var ref = firebase.database().ref().child("events");
  $scope.events = $firebaseArray(ref);
  $scope.creating = false;
  $scope.flip = "";

  //Canvas 
  canvas = new fabric.Canvas('c', {selection: false});
  var mapSizeRect = new fabric.Rect({ 
    left: 50, 
    top: 50, 
    width: 50, 
    height: 50, 
    fill: '#9f9', 
    originX: 'left', 
    originY: 'top',
    lockRotation: true,
    hasRotatingPoint: false
  });

  //og
  $scope.createNew = function(){
    if($scope.flip == "") {
      $scope.creating = true;
      $scope.name = $scope.eventSearch;
      $scope.eventSearch = "#21";
      $scope.flip = "flip";
      
      //Canvas Init
      canvas.setHeight(600);
      canvas.setWidth(800);
      canvas.renderAll();
      canvas.clear();
      initCanvas(canvas, mapSizeRect);
    }
    else {
      $scope.creating = false;
      $scope.eventSearch = "";
      $scope.flip = ""; 
    }
  };

  $scope.submitEvent = function(){
    saveAll();
    if(!$scope.mapData){
      $scope.mapData = "";
    }
    if(!$scope.fburl){
      $scope.fburl = "";
    }
    writeEventData($scope.name, $scope.location, $scope.time, $scope.date, $scope.fburl, $scope.imgurl, $scope.mapData);
    $scope.createNew();
    canvas.clear();
  };

  /////////////////////////////////////////////////////
  ////////////////////////////////////////////////
  /////////////////////////////////////////////
  var gridArray = [];

  $scope.createGrid = function(){
    var grid = 20;
    for (var i = 0; i < mapSizeRect.height/grid; i++) {
      gridArray[i] = [];
      for(var j = 0; j < mapSizeRect.width/grid; j++){
        gridArray[i][j] = {};
        gridArray[i][j] = new fabric.Rect({ 
          left: mapSizeRect.left + j * grid, 
          top: mapSizeRect.top + i * grid, 
          width: grid, 
          height: grid, 
          fill: '#090', 
          originX: 'left', 
          originY: 'top',
          hasControls: false,
          hasBorders: false,
          stroke: 'white',
          strokeWidth: 1,
          hasRotatingPoint: false,
          lockMovementX: true,
          lockMovementY: true,
          enabled: true,
          opacity: 0.5,
          coords: {x: i, y: j}
        });
        canvas.add(gridArray[i][j]);
        gridArray[i][j].on("mousedown", function(gridArra){
          this.fill = "#900";
          this.enabled = false;
        });
      };
    };
    mapSizeRect.remove();
    canvas.renderAll();
    gridStore = gridArray;
  }


  function saveAll(){
    tempArray = [];
    for (var i = 0; i < gridArray.length; i++) {
      tempArray[i] = [];
      for(var j = 0; j < gridArray[i].length; j++){
        tempArray[i][j] = {enabled : (gridArray[i][j].enabled == true ? 1 : 0), coords: gridArray[i][j].coords};
      }
    };

    gridObject = {mapdata: tempArray, start: [gridArray[0][0].left, gridArray[0][0].top]};
    gridStore = gridObject;
    // canvas.clear();
    // gridArray = [];
    // gridArray = redraw();
    $scope.mapData = gridObject;
    return gridObject;
    console.log(gridObject);
  }
});

// Controls the Event Page

app.controller('EventCtrl', function ($scope, $firebaseArray, $firebaseObject, $routeParams/* $scope, $location, $http */) {
  
  var eventName = $routeParams.event_name;

  var ref = firebase.database().ref().child("events").child(eventName);
  $scope.event = $firebaseObject(ref);
  console.log($scope.event);

  $scope.booths = $firebaseArray(firebase.database().ref().child("events").child(eventName).child("booths"));

  $scope.creating = false;
  $scope.flip = "";

  //Canvas 
  canvas = new fabric.Canvas('c', {selection: false});
  var gridData = [];
  grid = 20;
  var chosen = {};
  chosen.x = -1;
  chosen.y = -1;

  function initBoothCanvas(canvas) {
    canvas.setBackgroundImage($scope.event.imgurl, canvas.renderAll.bind(canvas), {
      width: canvas.width,
      height: canvas.height
    });
    for(var i = 0; i < $scope.event.mapData.mapdata.length; i++){
      gridData[i] = [];
      for(var j = 0; j < $scope.event.mapData.mapdata[i].length; j++){
        var color = "#900";
        var enabled = $scope.event.mapData.mapdata[i][j].enabled;
        if(enabled == true){
          color = "#090";
        }

        if($scope.event.mapData.mapdata[i][j].booth){
          color = "#009";
          enabled = false;
        }

        gridData[i][j] = new fabric.Rect({ 
          left: $scope.event.mapData.start[0] + j * grid, 
          top: $scope.event.mapData.start[1] + i * grid, 
          width: grid, 
          height: grid, 
          fill: color, 
          originX: 'left', 
          originY: 'top',
          hasControls: false,
          hasBorders: false,
          stroke: 'white',
          strokeWidth: 1,
          hasRotatingPoint: false,
          lockMovementX: true,
          lockMovementY: true,
          enabled: enabled,
          opacity: 0.5,
          coords: {x: $scope.event.mapData.mapdata[i][j].coords.x, y: $scope.event.mapData.mapdata[i][j].coords.y},
          booth: $scope.event.mapData.mapdata[i][j].booth || ""
        });
        canvas.add(gridData[i][j]);
        if(gridData[i][j].enabled == true){
          gridData[i][j].on("mousedown", function(){
            //choose(i,j);
            if(chosen.x == -1 || chosen.y == -1){
              chosen.x = this.coords.x; chosen.y = this.coords.y;
              this.fill = "#009";
            }else{
              gridData[chosen.x][chosen.y].fill = "#090";
              this.fill = "#009";
              chosen.x = this.coords.x; chosen.y = this.coords.y;
            }
          });  
        }
      }
    }
  }

  function choose(i, j){
    console.log(i + " " + j);
    if(chosen.x == -1 || chosen.y == -1){
      chosen.x = i; chosen.y = j;
      gridData[i][j].fill = "#009";
    }else{
      gridData[chosen.x][chosen.y].fill = "#090";
      gridData[i][j].fill = "#009";
      chosen.x = i; chosen.y = j;
    }
  }

  $scope.createNew = function(){
    canvas.setHeight(600);
    canvas.setWidth(800);
    canvas.renderAll();
    if($scope.flip == "") {
      $scope.creating = true;
      $scope.name = $scope.boothSearch;
      $scope.boothSearch = "#21";
      $scope.flip = "flip";

      //Canvas Init
      canvas.clear();
      initBoothCanvas(canvas);
    }
    else {
      $scope.creating = false;
      $scope.boothSearch = "";
      $scope.flip = ""; 
    }
  };

  $scope.submitEvent = function(){
    if(!$scope.mapData){
      $scope.mapData = "";
    }
    if($scope.fburl && $scope.name){
      $scope.mapData = gridData;
      //gridData[chosen.x][chosen.y].booth = $scope.name;
      gridData[chosen.x][chosen.y].enabled = false;
      writeBoothData($scope.event.name, $scope.name, $scope.location, $scope.fburl, $scope.categories, gridData, chosen);
      canvas.clear();
      $scope.createNew();
    }
  };

});
/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope, $routeParams) {
  // console.log("Page Controller reporting for duty.");
});

/**
 * Controls navBar
 */
app.controller('NavCtrl', function ($scope, $location/* $scope, $location, $http */) {
  // console.log("Nav Controller reporting for duty.");
  
});