import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
	const windowFrom = document.querySelectorAll('.balcon_icons_img'),
		windowWidth = document.querySelectorAll('#width'),
		windowHeight = document.querySelectorAll('#height'),
		windowType = document.querySelectorAll('#view_type'),
		windowProfile = document.querySelectorAll('.checkbox');

	checkNumInputs('#width');
	checkNumInputs('#height');

	bindActionToElems('click', windowFrom, 'form');
	bindActionToElems('input', windowWidth, 'width');
	bindActionToElems('input', windowHeight, 'height');
	bindActionToElems('change', windowType, 'type');
	bindActionToElems('change', windowProfile, 'profile');

	function bindActionToElems(event, element, property) {
		element.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
					case 'SPAN':
						state[property] = i;
						break
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							i === 0 ? state[property] = "Холодное" : state[property] = "Теплое";
							element.forEach((box, j) => {
								box.checked = false;
								if (i == j) {
									box.checked = true;
								}
							})
						} else {
							state[property] = item.value
						}
						break
					case 'SELECT':
						state[property] = item.value
						break
				}
				console.log(state);
			});
		});
	}
};

export default changeModalState;