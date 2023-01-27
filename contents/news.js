// {
//     'title':'',     // 标题
//     'date':'',      // 年月日
//     'newbrand':true,    // 是否显示新闻前的小红色(New)标志
//     'content':'',   // 用户点开新闻之后的内容。该部分如果要分段的话可以这么写：'content':'<p>第一段</p><p>第二段</p><p>第三段</p>'
// }

news = [
    {
        'title':'New homepage of our I2ML is published online!',
        'date':'2023-01-25',
        'newbrand':true,
        'content':'<p>The home page of I2ML has received a major update!🎉🎉🎉</p><p>The updated responsive website can give you a smooth viewing experience on different devices, including computer, mobile phone and pad!</p><p>The website has changed to i2-multimedia-lab.github.io, the corresponding Github is github.com/I2-Multimedia-Lab/i2-multimedia-lab.github.io</p><p>Publishing content of our website can be achieved simply by editing dictionary elements! See our GitHub for details of the source code and the guidance!😄</p>',
    },
    {
        'title':'Our paper accepted by ACM Multimedia APCCPA Workshop 2022!',
        'date':'2022-08-08',
        'newbrand':false,
        'content':'<p>Congratulations on Kang You!</p><p>Congratulations on Kang You\'s research on point cloud compression, which was accepted as oral by the workshop APCCPA of ACM MM 2022, a CCF-A conference in the multimedia field.</p><p>ABSTRACT: Point cloud is a crucial representation of 3D contents, which has been widely used in many areas such as virtual reality, mixed reality, autonomous driving, etc. With the boost of the number of points in the data, how to efficiently compress point cloud becomes a challenging problem. In this paper, we propose a set of significant improvements to patch-based point cloud compression, i.e., a learnable context model for entropy coding, octree coding for sampling centroid points, and an integrated compression and training process. In addition, we propose an adversarial network to improve the uniformity of points during reconstruction. Our experiments show that the improved patch-based autoencoder outperforms the state-of-the-art in terms of rate-distortion performance, on both sparse and large-scale point clouds. More importantly, our method can maintain a short compression time while ensuring the reconstruction quality.</p>',
    },
    {
        'title':'Our paper accepted by IJCAI 2022!',
        'date':'2022-04-21',
        'newbrand':false,
        'content':"<p>Congratulations on Haoyue's work accpted by the International Joint Conference on Artificial Intelligence (IJCAI 2022), the top conference in CCF-A, with only 15% acceptance. The paper was also selected as Long Presentation (Long Show is another 25% of the accepted papers). Congratulations on Haoyue's breakthrough, which is very difficult. Very well-deserved achievement! Congratulations and Well Done!</p><p>ABSTRACT: Video frame interpolation task has recently become more and more prevalent in the computer vision field. At present, a number of researches based on deep learning have achieved great success. Most of them are either based on optical flow information, or interpolation kernel, or a combination of these two methods. However, these methods have ignored that there are grid restrictions on the position of kernel region during synthesizing each target pixel. These limitations result in that they cannot well adapt to the irregularity of object shape and uncertainty of motion, which may lead to irrelevant reference pixels used for interpolation. In order to solve this problem, we revisit the deformable convolution for video interpolation, which can break the fixed grid restrictions on the kernel region, making the distribution of reference points more suitable for the shape of the object, and thus warp a more accurate interpolation frame. Experiments are conducted on four datasets to demonstrate the superior performance of the proposed model in comparison to the state-of-the-art alternatives.</p>",
    },
    {
        'title':'Our paper accepted by IEEE ICASSP 2022!',
        'date':'2022-01-22',
        'newbrand':false,
        'content':"<p>Congratulations on the acceptance of Haoyue's research by the prestigious International Conference IEEE ICASSP 2022 in the field of image/video processing, which is scheduled to be held in Singapore in May. IEEE ICASSP is the CCF-B conference recommended by the Chinese Computer Society. Congratulations on Haoyue, well done!🌹🌹🌹</p><p>ABSTRACT: Motion estimation and motion compensation are indispensable parts of inter prediction in video coding. Since the motion vector of objects is mostly in fractional pixel units, original reference pictures may not accurately provide a suitable reference for motion compensation. In this paper, we propose a deep reference picture generator which can create a picture that is more relevant to the cur-rent encoding frame, thereby further reducing temporal redundancy and improving video compression efficiency. Inspired by the recent progress of Convolutional Neural Network(CNN), this paper pro-poses to use a dilated CNN to build the generator. Moreover, we insert the generated deep picture into Versatile Video Coding(VVC) as a reference picture and perform a comprehensive set of experiments to evaluate the effectiveness of our network on the latest VVC Test Model–VTM. The experimental results demonstrate that our pro-posed method achieves on average 9.7% bit saving compared with VVC under low-delay P configuration.</p>",
    },
    {
        'title':'Our paper of point cloud compression accepted by ACM Multimedia Asia 2021!',
        'date':'2021-09-28',
        'newbrand':false,
        'content':"<p>Congratulations on Kang You's research on 3D point cloud compression and reconstruction accepted by ACM Multimedia Asia 2021, a prestigious international conference in the multimedia field. The acceptance rate is only 32.7%. Congratulations! Well done!</p><p>ABSTRACT: The ever-increasing 3D application makes the point cloud compression unprecedentedly important and needed. In this paper, we propose a patch-based compression process using deep learning, focusing on the lossy point cloud geometry compression. Unlike existing point cloud compression networks, which apply feature extraction and reconstruction on the entire point cloud, we divide the point cloud into patches and compress each patch independently. In the decoding process, we finally assemble the decompressed patches into a complete point cloud. In addition, we train our network by a patch-to-patch criterion, i.e., use the local reconstruction loss for optimization, to approximate the global reconstruction optimality. Our method outperforms the state-of-the-art in terms of rate-distortion performance, especially at low bitrates. Moreover, the compression process we proposed can guarantee to generate the same number of points as the input. The network model of this method can be easily applied to other point cloud reconstruction problems, such as upsampling.</p>",
    },
    {
        'title':'Our paper accepted by ICCV2021 workshop on Adversarial Robustness In the Real World!',
        'date':'2021-08-13',
        'newbrand':false,
        'content':"<p>Congratulations on Cheng Zhang's research, which was received by workshop on Adversarial Robustness In the Real World of IEEE Int. Conf. Computer Vision (ICCV2021). This is a great result, as the paper has undergone several rounds of modifications and has been accepted at last. Congratulations to Cheng Zhang, very well deserved!</p><p>ABSTRACT: Recent studies have shown that neural network (NN) based image classifiers are highly vulnerable to adversarial examples, which poses a threat to security-sensitive image recognition task. Prior work has shown that JPEG compression can combat the drop in classification accuracy on adversarial examples to some extent. But, as the compression ratio increases, traditional JPEG compression is insufficient to defend those attacks but can cause an abrupt accuracy decline to the benign images. In this paper, with the aim of fully filtering the adversarial perturbations, we firstly make modifications to traditional JPEG compression algorithm which becomes more favorable for NN. Specifically, based on an analysis of the frequency coefficient, we design a NN-favored quantization table for compression. Considering compression as a data augmentation strategy, we then combine our model-agnostic preprocess with noisy training. We fine-tune the pre-trained model by training with images encoded at different compression levels, thus generating multiple classifiers. Finally, since lower (higher) compression ratio can remove both perturbations and original features slightly (aggressively), we use these trained multiple models for model ensemble. The majority vote of the ensemble of models is adopted as final predictions. Experiments results show our method can improve defense efficiency while maintaining original accuracy.</p>",
    },
]
