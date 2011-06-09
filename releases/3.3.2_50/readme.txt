1.modify source cdoe to change base Path
  file _source\core\ckeditor_base.js
  getUrl : function
  override this.basePath
  var packagePath = zk.ajaxURI('/web/js/ckez/ext/CKeditor/', {desktop : this.desktop,au : true});
  packagePath = packagePath.substr(0,packagePath.lastIndexOf("/")+1);
  if(this.basePath!=packagePath)
	this.basePath=packagePath;	

2.how to packing ckeditor source js file
  download ckpackager.exe from	http://svn.fckeditor.net/CKPackager/trunk/bin/ckpackager.exe
  put it in the same folder with _source
  check ckeditor.pack file is exist
  in commecd line type "ckpackager.exe ckeditor.pack -v"
   