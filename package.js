Package.describe({
	name: 'nicolaslopezj:cms',
	summary: ' /* Fill me in! */ ',
	version: '1.0.0',
	git: ' /* Fill me in! */ '
});

Npm.depends({
	"spin.js": "2.0.1"
});


Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'meteor-platform',
		'meteorhacks:subs-manager',
		'less', 
		'linto:fontawesome', 
		'accounts-password', 
		'iron:router', 
		'zimme:iron-router-active@1.0.0', 
		'dburles:collection-helpers', 
		'fuatsengul:iron-router-auth@1.0.7', 
		'cunneen:mailgun', 
		'aldeed:collection2', 
		'aldeed:autoform@4.0.0-rc10', 
		'aslagle:reactive-table@0.5.5', 
		'hckrs:summernote', 
		'rajit:bootstrap3-datepicker', 
		'aldeed:delete-button', 
		'copleykj:livestamp', 
		'lepozepo:s3@4.1.1', 
		'useraccounts:bootstrap@1.1.1',
		]);


	api.imply([
		'accounts-password',
		'less', 
		'zimme:iron-router-active',
		'iron:router',
		'dburles:collection-helpers',
		'copleykj:livestamp',
		'meteorhacks:subs-manager',
		]);


	api.addFiles([
		'lib/base.js',
		'lib/accounts.js',
		'lib/attributes/image.js',

		'routes/admin.js',
		]);

	api.addFiles([
		'server/fixtures.js',
		'server/publications.js',
		], 'server');

	api.addFiles([
		'.npm/package/node_modules/spin.js/spin.js',
		
		'client/admin/layout/footer.html',
		'client/admin/layout/header.html',
		'client/admin/layout/layout.html',
		'client/admin/layout/layout.js',
		'client/admin/layout/sidebar.html',
		'client/admin/layout/sidebar.js',
		'client/admin/layout/accounts/formTemplate.html',
		'client/admin/layout/accounts/formTemplate.js',
		'client/admin/layout/accounts/formTemplate.less',
		'client/admin/layout/loading/loading.html',
		'client/admin/layout/loading/loading.js',
		'client/admin/layout/loading/loading.less',

		'client/admin/dictionary/index/index.html',
		'client/admin/dictionary/update/update.html',
		'client/admin/dictionary/update/update.js',

		'client/admin/entities/create/create.html',
		'client/admin/entities/create/create.js',
		'client/admin/entities/delete/delete.html',
		'client/admin/entities/delete/delete.js',
		'client/admin/entities/index/index.html',
		'client/admin/entities/index/index.js',
		'client/admin/entities/update/update.html',
		'client/admin/entities/update/update.js',

		'client/autoform/image/image.html',
		'client/autoform/image/image.js',
		'client/autoform/image/image.less',

		'client/helpers/cms.js',
		'client/helpers/dictionary.js',
		'client/helpers/entities.js',

		'client/stylesheets/cms-global.less',
		], 'client');

	api.export('cms');

});

