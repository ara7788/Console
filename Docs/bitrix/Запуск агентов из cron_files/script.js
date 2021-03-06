function LearningFixedCommentBtn(params)
{
	params = params || {};
	var container = params.container || null,
		btnNode,
		collapseNodeId = params.collapseNodeId || null,
		collapseNode,
		postList = params.postList || null;

	if(container != null)
	{
		btnNode = container.querySelector('.js-learning-comment-fixed-btn');
		if(btnNode != null)
		{
			BX.addClass(container, 'learning-comment-btn-cnr-show');
			BX.bind(btnNode, 'click', clickBtnHandler);
			collapseNode = BX(collapseNodeId);
		}
	}

	function clickBtnHandler()
	{
		collapseComment(collapseNode, 0);
		postList.reply();
		var commentPlaceholderNode = BX('record-' + postList['ENTITY_XML_ID'] + '-0-placeholder');
		if(commentPlaceholderNode != null)
		{
			setTimeout(function()
			{
				BX.scrollToNode(commentPlaceholderNode);
			}, 500);
		}
	}
	return this;
}