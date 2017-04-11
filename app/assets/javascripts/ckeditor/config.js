CKEDITOR.editorConfig = function(config) {
  config.language = 'en';
  // config.width = '700';
  config.filebrowserBrowseUrl = "/ckeditor/attachment_files";
  config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";
  config.filebrowserImageBrowseUrl = "/ckeditor/pictures";
  config.filebrowserImageUploadUrl = "/ckeditor/pictures";
  config.filebrowserUploadUrl = "/ckeditor/attachment_files";

  config.toolbar_Pure = [
    '/', {
      name: 'basicstyles',
      items: ['Source', '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
    }, {
      name: 'paragraph',
      items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl']
    }, {
      name: 'links',
      items: ['Link', 'Unlink']
    }, '/', {
      name: 'styles',
      items: ['Styles', 'Format', 'Font', 'FontSize']
    }, {
      name: 'colors',
      items: ['TextColor', 'BGColor']
    }, {
      name: 'insert',
      items: ['Image', 'Table', 'HorizontalRule', 'PageBreak']
    }
  ];

  config.toolbar_mini = [
    '/', {
      name: 'basicstyles',
      items: ['Source', '-', "Bold",  "Italic",  "Underline",  "Strike",  "-",  "Subscript",  "Superscript"]
    },
    {
      name: 'paragraph',
      items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
    },
    {
      name: 'links',
      items: ['Link', 'Unlink']
    },
    {
      name: 'styles',
      items: ['Format', 'Font', 'FontSize']
    },
    {
      name: 'insert',
      items: ['Image', 'Table', 'HorizontalRule']
    }
  ];

  config.toolbar = 'Pure';
  return true;
};
